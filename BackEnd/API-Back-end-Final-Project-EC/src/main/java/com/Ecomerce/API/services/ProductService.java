package com.Ecomerce.API.services;

import java.util.List;
import java.util.Map;

import com.Ecomerce.API.models.dtos.ProductDto;

public interface ProductService {
	Map<String, List<?>>  searchProduct(String keyValue);
	List<ProductDto> findByAmount(int pagenumber, int amount);
}
