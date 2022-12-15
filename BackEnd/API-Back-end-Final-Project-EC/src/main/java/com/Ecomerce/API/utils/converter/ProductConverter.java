package com.Ecomerce.API.utils.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.SearchApiDto;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.UserRepository;

@Service
public class ProductConverter {
	
	@Autowired
	CategoryRepository categoryRepository;	
	
	@Autowired
	UserRepository userRepository;
	
	public Product convertToEntity (ProductDto productDto) {
		if (productDto == null) {
			return null;
		}
		
		Product product = new Product();

		product.setId(productDto.getId());
		product.setName(productDto.getName());
		product.setDescription(productDto.getDescription());
		product.setManufacturer(productDto.getManufacturer());
		product.setImageProduct(productDto.getImageProduct());
		product.setAmount(productDto.getAmount());
		product.setCategory(categoryRepository.findById(productDto.getCategoryId()).orElse(null));		
		product.setUser(userRepository.findById(productDto.getAccountName()).orElse(null));
		product.setStatus(productDto.isStatus());
		
		return product;
	}
	
	public ProductDto convertToDto (Product product) {
		if (product == null) {
			return null;
		}
		
		ProductDto productDto = new ProductDto();

		productDto.setId(product.getId());
		productDto.setName(product.getName());
		productDto.setDescription(product.getDescription());
		productDto.setManufacturer(product.getManufacturer());
		productDto.setImageProduct(product.getImageProduct());
		productDto.setAmount(product.getAmount());
		productDto.setCategoryId(product.getCategory().getId());
		productDto.setAccountName(product.getUser().getAccountName());
		productDto.setStatus(product.isStatus());
		
		return productDto;
	}
}
