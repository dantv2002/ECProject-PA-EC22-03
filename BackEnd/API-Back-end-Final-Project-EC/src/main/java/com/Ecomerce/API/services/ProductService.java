package com.Ecomerce.API.services;

import java.util.List;
import java.util.Map;

import com.Ecomerce.API.models.dtos.ProductDetailDto;
import com.Ecomerce.API.models.dtos.ProductDto;

public interface ProductService {
	Map<String, List<?>>  searchProduct(String keyValue);
	List<ProductDto> findByAmount(int pagenumber, int amount);
	Map<String, List<?>> filterProduct(String nameCategory, String nameManufacturer, String statusProduct,
			boolean increase, int maxPrice, int minPrice, String keyValue);
	ProductDetailDto displayProductOnPage(int id);
}
