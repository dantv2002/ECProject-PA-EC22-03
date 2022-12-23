package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;
import com.Ecomerce.API.models.dtos.OrderOfUserDto;
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.AuctionDetail;
import com.Ecomerce.API.models.entities.Category;
import com.Ecomerce.API.models.entities.Order;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.StatusAuction;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.OrderRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.StatusOrderRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.UserStoreService;
import com.Ecomerce.API.utils.converter.AuctionConverter;
import com.Ecomerce.API.utils.converter.ProductConverter;
import com.Ecomerce.API.utils.converter.UserConverter;

@Service
public class UserStoreServiceImpl implements UserStoreService {

	@Autowired
	ProductConverter productConverter;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	StatusAuctionRepository statusAuctionRepository;
	
	@Autowired
	AuctionRepository auctionRepository;
	
	@Autowired
	UserConverter userConverter;
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	StatusOrderRepository statusOrderRepository;
	
	@Autowired
	AuctionConverter auctionConverter;
	
	
	@Override
	public boolean insertProduct(ProductDto dto) {
		Product product = productConverter.convertToEntity(dto);
		try {
			productRepository.save(product);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public boolean updateProduct(int productId, ProductDto dto) {
		Product product = productRepository.findById(productId).orElse(null);
		if (product == null || !product.isStatus()) {
			return false;
		}
		
		try {
			product.setName(dto.getName());
			product.setDescription(dto.getDescription());
			product.setManufacturer(dto.getManufacturer());
			product.setImageProduct(dto.getImageProduct());
			product.setAmount(dto.getAmount());
			product.setCategory(categoryRepository.findById(dto.getCategoryId()).orElse(null));
			product.setUser(userRepository.findById(dto.getAccountName()).orElse(null));
			product.setStatus(dto.isStatus());
			
			productRepository.save(product);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteProduct(int productId) {
		Product product = productRepository.findById(productId).orElse(null);
		if (product == null || !product.isStatus()) {
			return false;
		}
		
		try {
			product.setStatus(false);
			productRepository.save(product);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}

	@Override
	public List<OrderOfUserDto> getOrderOfUser(String accountName) {
		User seller = userRepository.findById(accountName).orElse(null);
		if (seller == null || !seller.isStatusUser()) {
			return null;
		}
		StatusAuction statusAuction = statusAuctionRepository.findById(3).orElse(null);
		List<Auction> auctions = auctionRepository.findBySellerEndAndStatusAuctionAndExist(seller, statusAuction, true);
		List<OrderOfUserDto> ordersOfUserDto = new ArrayList<OrderOfUserDto>();
		for (Auction auction : auctions) {
			List<Order> orders = auction.getOrders();
			for (Order order : orders) {
				ordersOfUserDto.add(userConverter.convertToOrderOfUserDto(order));
			}
		}
		return ordersOfUserDto;
	}

	@Override
	public DetailOrderOfUserDto getDetailOrderOfUser(int orderId) {
		Order order = orderRepository.findById(orderId).orElse(null);
		if (order == null) {
			return null;
		}
		
		return userConverter.convertToDetailOrderOfUserDto(order);
	}

	@Override
	public boolean changeStatusOrder(int orderId) {
		Order order = orderRepository.findById(orderId).orElse(null);
		if (order == null || order.getStatus().getId() == 2 || order.getStatus().getId() == 3) {
			return false;
		}
		
		try {
			order.setStatus(statusOrderRepository.findById(2).orElse(null));
			orderRepository.save(order);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}

	@Override
	public List<AuctionDto> getAuctionThatUserJoined(String accountName) {
//		User seller = userRepository.findById(accountName).orElse(null);
//		if (seller == null || !seller.isStatusUser()) {
//			return null;
//		}
		
		StatusAuction statusAuction = statusAuctionRepository.findById(3).orElse(null);
		List<Auction> auctionsSuccess = auctionRepository.findByStatusAuctionAndExist(statusAuction, true);
		
		statusAuction = statusAuctionRepository.findById(2).orElse(null);
		List<Auction> auctionsDuring = auctionRepository.findByStatusAuctionAndExist(statusAuction, true);
		
		List<AuctionDto> auctionsDto = new ArrayList<AuctionDto>();
		for (Auction auction : auctionsSuccess) {
			List<AuctionDetail> detailAuc = auction.getAuctionDetails();
			for (AuctionDetail detail : detailAuc) {
				if (detail.getSeller().getAccountName().equals(accountName)) {
					auctionsDto.add(auctionConverter.convertToDto(auction));
					break;
				}
			}
		}
		
		for (Auction auction : auctionsDuring) {
			List<AuctionDetail> detailAuc = auction.getAuctionDetails();
			for (AuctionDetail detail : detailAuc) {
				if (detail.getSeller().getAccountName().equals(accountName)) {
					auctionsDto.add(auctionConverter.convertToDto(auction));
					break;
				}
			}
		}
		
		return auctionsDto;
	}

	@Override
	public List<ProductDto> findProductWithCategory(String categoryName, String accountName) {
		User user = userRepository.findById(accountName).orElse(null);
		if (user == null || !user.isStatusUser()) {
			return null;
		}
		
		List<ProductDto> productsDto = new ArrayList<ProductDto>();
		if (categoryName.equals("all")) {
			List<Product> products = productRepository.findByUser(user);
			products.forEach(product -> productsDto.add(productConverter.convertToDto(product)));
		} else {
			Category category = new Category();
			try {
				category = categoryRepository.findByName(categoryName).get(0);
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			List<Product> products = category.getProducts();
			for (Product product : products) {
				if (product.getUser().getAccountName().equals(accountName)) {
					productsDto.add(productConverter.convertToDto(product));
				}
			}
		}
		
		return productsDto;
	}
}
