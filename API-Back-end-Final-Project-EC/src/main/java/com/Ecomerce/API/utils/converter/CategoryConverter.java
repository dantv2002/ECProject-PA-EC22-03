package com.Ecomerce.API.utils.converter;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.entities.Category;

@Service
public class CategoryConverter {

	public Category convertToEntity(CategoryDto categoryDto) {
		if (categoryDto == null) {
			return null;
		}
	
		Category category = new Category();
		category.setId(categoryDto.getId());
		category.setName(categoryDto.getName());
		category.setImageUrl(categoryDto.getImageUrl());

		return category;
	}

	public CategoryDto convertToDto(Category category) {
		if (category == null) {
			return null;
		}
		CategoryDto categoryDto = new CategoryDto();
		categoryDto.setId(category.getId());
		categoryDto.setName(category.getName());
		categoryDto.setImageUrl(category.getImageUrl());
		
		return categoryDto;
	}
}
