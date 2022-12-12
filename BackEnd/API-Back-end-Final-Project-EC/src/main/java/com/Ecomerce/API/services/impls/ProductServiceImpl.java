package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.entities.Category;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductRepository repository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Override
	public List<ProductDto> findAll() {
		List <Product> products = repository.findAll();
		List <ProductDto> productDtos = new ArrayList<ProductDto>();
		products.forEach(product -> 
			productDtos.add(convertToDto(product)));
		
		return productDtos;
	}

	@Override
	public ProductDto save(ProductDto productDto) {
		Product product = convertToEntity(productDto);
		repository.save(product);
		
		return productDto;
	}

	@Override
	public ProductDto findById(int id) {
		Product product = repository.findById(id).orElse(null);

		return convertToDto(product);
	}

	@Override
	public ProductDto delete(int id) {
		Product product = repository.findById(id).orElse(null);
		
		if (product != null) {
			ProductDto productDto = convertToDto(product);
			repository.delete(product);
			return productDto;
		}
		
		return null;
	}	
	
	@Override
	public ProductDto update (int id, ProductDto newProduct) {
		Product updatedProduct = repository.findById(id).orElse(null);
		
		if (updatedProduct == null) {
			return null;
		}
		
		updatedProduct.setName(newProduct.getName());
		updatedProduct.setDescription(newProduct.getDescription());
		updatedProduct.setManufacturer(newProduct.getManufacturer());
		updatedProduct.setImageProduct(newProduct.getImageProduct());
		
		Category category = categoryRepository.findById(newProduct.getCategoryId()).orElse(null);
		updatedProduct.setCategory(category);
		updatedProduct.setAccountName(newProduct.getAccountName());
		
		repository.save(updatedProduct);
		
		return convertToDto(updatedProduct);
	}
	
	@Override
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
		
		Category category = categoryRepository.findById(productDto.getCategoryId()).orElse(null);
		product.setCategory(category);
		product.setAccountName(productDto.getAccountName());
		
		return product;
	}
	
	@Override
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
		productDto.setCategoryId(product.getCategory().getId());
		productDto.setAccountName(product.getAccountName());
		
		return productDto;
	}
}	