package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.entities.Category;

public interface CategoryService {
	List<CategoryDto> findAll();
	CategoryDto findById(int id);
	CategoryDto save(CategoryDto categoryDto);
	CategoryDto update(int id, CategoryDto categoryDto);
	CategoryDto delete(int id);
	Category convertToEntity (CategoryDto categoryDto); 
	CategoryDto convertToDto (Category category);
}
