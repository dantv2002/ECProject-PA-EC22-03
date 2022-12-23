package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.entities.Category;

public interface CategoryService {
	List<CategoryDto> findAll();
	List<String> findManufacturerByCategoryName(String name);
	CategoryDto insertAndUpdate(CategoryDto categoryDto);
	Boolean deleteById(int id);
}
