package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findByName(String name);

	Category findOneById(int id);
}
