package com.Ecomerce.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecomerce.API.models.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
