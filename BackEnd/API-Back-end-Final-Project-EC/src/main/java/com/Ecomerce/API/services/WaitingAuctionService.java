package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.WaitingAuctionDto;

public interface WaitingAuctionService {
	List<WaitingAuctionDto> findAll();
	// List<ProductDto> searchProduct(String keyValue);
}
