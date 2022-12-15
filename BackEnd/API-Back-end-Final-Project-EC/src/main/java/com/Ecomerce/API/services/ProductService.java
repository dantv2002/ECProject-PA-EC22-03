package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.SearchApiDto;
import com.Ecomerce.API.models.entities.Product;

public interface ProductService {
	List<SearchApiDto> searchProduct(String keyValue);
	List<ProductDto> findByAmount(int pagenumber, int amount);
}
