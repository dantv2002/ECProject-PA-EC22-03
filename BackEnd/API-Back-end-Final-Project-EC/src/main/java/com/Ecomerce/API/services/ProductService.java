package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.entities.Product;

public interface ProductService {
	List<ProductDto> findAll();
	ProductDto save(ProductDto productDto);
	ProductDto findById(int id);
	ProductDto delete(int id);
	ProductDto update(int id, ProductDto productDto);
	Product convertToEntity (ProductDto productDto); 
	ProductDto convertToDto (Product product);
}
