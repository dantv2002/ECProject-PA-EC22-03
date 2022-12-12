package com.Ecomerce.API.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ecomerce.API.models.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	List<Product> findTop12ByIdIsNotNull();
}
