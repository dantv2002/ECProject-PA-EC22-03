package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.dtos.ProductInCartDto;
import com.Ecomerce.API.models.entities.AddressShipping;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AddressShippingRepository;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.CartAndPaymentService;
import com.Ecomerce.API.utils.converter.AuctionConverter;
import com.Ecomerce.API.utils.converter.ShippingAddressConverter;

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
	ShippingAddressConverter converter;
	
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
	public List<AddressShippingDto> getShippingAddress(String accountName) {
		User user = userRepository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		List<AddressShipping> shippingAddressList = addressShippingRepository.findByUser(user);
		
		return converter.convertToListShippingAddressDto(shippingAddressList);
	}
}
