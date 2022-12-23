package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;
import com.Ecomerce.API.models.dtos.OrderOfUserDto;
import com.Ecomerce.API.models.dtos.ProductDto;

public interface UserStoreService {
	boolean insertProduct(ProductDto dto);
	boolean updateProduct(int productId, ProductDto dto);
	boolean deleteProduct(int productId);
	
	List<OrderOfUserDto> getOrderOfUser(String accountName);
	DetailOrderOfUserDto getDetailOrderOfUser(int orderId);
	boolean changeStatusOrder(int orderId);
	List<AuctionDto> getAuctionThatUserJoined(String accountName);
	List<ProductDto> findProductWithCategory(String categoryName, String accountName);
}
