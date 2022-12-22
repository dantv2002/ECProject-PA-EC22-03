package com.Ecomerce.API.services.impls;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.entities.Category;
import com.Ecomerce.API.models.entities.InforUser;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.services.CategoryService;
import com.Ecomerce.API.utils.converter.CategoryConverter;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepository repository;

	@Autowired
	private CategoryConverter converter;

	@Override
	public List<CategoryDto> findAll() {
		List<Category> categories = repository.findAll();
		List<CategoryDto> categoriesDto = new ArrayList<CategoryDto>();
		categories.forEach(category -> categoriesDto.add(converter.convertToDto(category)));

		return categoriesDto;
	}

	@Override
	public List<String> findManufacturerByCategoryName(String name) {
		List<Category> categories = repository.findByName(name);
		if (categories.isEmpty() || categories == null) {
			return null;
		}
		List<Product> products = categories.get(0).getProducts();
		List<String> manufacturers = new ArrayList<String>();
		for (Product product : products) {
			if (!manufacturers.contains(product.getManufacturer())) {
				manufacturers.add(product.getManufacturer());
			}
		}
		return manufacturers;
	}

	@Override
	public CategoryDto insertAndUpdate(CategoryDto categoryDto) {
		Category category = repository.findById(categoryDto.getId()).orElse(new Category());
		category.setImageUrl(categoryDto.getImageUrl());
		category.setName(categoryDto.getName());
		CategoryDto dto = new CategoryDto();
		try {
			dto = converter.convertToDto(repository.save(category));
		} catch (Exception e) {
			return dto;
		}
		return dto;
	}

	@Override
	public Boolean deleteById(int id) {
		Category category = repository.findById(id).orElse(null);
		if(category == null)
			return false;
		try {
			repository.delete(category);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
}
