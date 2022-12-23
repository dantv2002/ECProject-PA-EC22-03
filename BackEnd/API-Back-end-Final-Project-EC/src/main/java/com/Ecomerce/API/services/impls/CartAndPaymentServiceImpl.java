package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.DataPaymentDto;
import com.Ecomerce.API.models.dtos.ProductInCartDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.Order;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.models.entities.StatusOrder;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AddressShippingRepository;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.OrderRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.StatusOrderRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.CartAndPaymentService;
import com.Ecomerce.API.utils.converter.AuctionConverter;

@Service
public class CartAndPaymentServiceImpl implements CartAndPaymentService {
	@Autowired
	AuctionRepository auctionRepository;
	
	@Autowired
	StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired 
	AddressShippingRepository addressShippingRepository;
	
	@Autowired
	AuctionConverter auctionConverter;
	
	@Autowired
	StatusOrderRepository statusOrderRepository;
	
	@Autowired
	OrderRepository orderRepository;
	
	
	@Override
	public List<ProductInCartDto> getProductInCart(String accountName) {
		User user = userRepository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		StatusAuction statusAuction = statusAuctionRepository.findById(3).orElse(null);
		
		List<Auction> auctions = auctionRepository.findByBuyerAndStatusAuctionAndExist(user, statusAuction, true);
		List<ProductInCartDto> productsInCart = new ArrayList<ProductInCartDto>();
		for (Auction auction : auctions) {
			if (auction.getOrders() != null || !auction.getOrders().isEmpty()) {
				productsInCart.add(auctionConverter.convertToProductInCartDto(auction));
			}
		}
		return productsInCart;
	}

	@Override
	public List<DataPaymentDto> priceShipping(List<Integer> listAuctionId) {
		List<DataPaymentDto> datasPayment = new ArrayList<DataPaymentDto>();
		for (int auctionId : listAuctionId) {
			Auction auction = auctionRepository.findById(auctionId).orElse(null);
			if (auction == null || !auction.isExist()) {
				continue;
			}
			datasPayment.add(new DataPaymentDto(auctionId, auction.getPriceShipping()));
		}
		return datasPayment;
	}

	@Override
	public double convertFromVNDtoDollar(double VND) {
		return VND / 23650;
	}

	@Override
	public boolean saveOrder(List<Integer> listAuctionId) {
		for (int auctionId : listAuctionId) {
			Auction auction = auctionRepository.findById(auctionId).orElse(null);
			if (auction == null || !auction.isExist()) {
				continue;
			}
			
			Order order = new Order();
			order.setAuction(auction);
			order.setStatus(statusOrderRepository.findById(1).orElse(null));
			try {
				orderRepository.save(order);
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
			
		}
		return true;
	}
}
