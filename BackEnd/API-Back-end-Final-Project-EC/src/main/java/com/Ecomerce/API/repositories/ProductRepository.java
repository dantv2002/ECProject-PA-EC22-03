package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.User;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	List<Product> findTop12ByIdIsNotNull();
	List<Product> findDistinctByName(String name);
	List<Product> findByNameContaining(String keyValue);
	List<Product> findByManufacturer(String manufacturer);
	List<Product> findByUser(User user);
}
