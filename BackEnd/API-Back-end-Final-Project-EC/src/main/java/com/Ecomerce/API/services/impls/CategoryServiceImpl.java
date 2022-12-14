package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.entities.Category;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.repositories.CategoryRepository;
import com.Ecomerce.API.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepository repository;

	@Override
	public List<CategoryDto> findAll() {
		List <Category> categories = repository.findAll();
		List <CategoryDto> categoriesDto = new ArrayList<CategoryDto>();
		categories.forEach(category -> categoriesDto.add(convertToDto(category)));
		
		return categoriesDto;
	}

	@Override
	public CategoryDto findById(int id) {
		Category category = repository.findById(id).orElse(null);
		
		return convertToDto(category);
	}

	@Override
	public CategoryDto save(CategoryDto categoryDto) {
		Category category = convertToEntity(categoryDto);
		repository.save(category);
		
		return categoryDto;
	}

	@Override
	public CategoryDto update(int id, CategoryDto categoryDto) {
		Category category = repository.findById(id).orElse(null);
		if (category == null) {
			return null;
		}
		category.setId(categoryDto.getId());
		category.setName(categoryDto.getName());
		category = repository.save(category);
		
		return convertToDto(category);
	}

	@Override
	public CategoryDto delete(int id) {
		Category category = repository.findById(id).orElse(null);
		if (category == null) {
			return null;
		}
		repository.delete(category);
		
		return convertToDto(category);
	}

	@Override
	public Category convertToEntity(CategoryDto categoryDto) {
		if (categoryDto == null) {
			return null;
		}
	
		Category category = new Category();
		category.setId(categoryDto.getId());
		category.setName(categoryDto.getName());

		return category;
	}

	@Override
	public CategoryDto convertToDto(Category category) {
		if (category == null) {
			return null;
		}
		CategoryDto categoryDto = new CategoryDto();
		categoryDto.setId(category.getId());
		categoryDto.setName(category.getName());
		
		return categoryDto;
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
}
