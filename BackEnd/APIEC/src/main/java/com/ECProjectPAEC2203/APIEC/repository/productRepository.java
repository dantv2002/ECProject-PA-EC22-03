package com.ECProjectPAEC2203.APIEC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ECProjectPAEC2203.APIEC.model.productModel;

public interface productRepository extends JpaRepository<productModel, String>{
	
}
