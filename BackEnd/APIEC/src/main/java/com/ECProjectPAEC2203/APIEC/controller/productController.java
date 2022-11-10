package com.ECProjectPAEC2203.APIEC.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ECProjectPAEC2203.APIEC.dto.productDto;
import com.ECProjectPAEC2203.APIEC.model.productModel;
import com.ECProjectPAEC2203.APIEC.repository.productRepository;

import com.ECProjectPAEC2203.APIEC.common.common;
@RestController
@RequestMapping(value = "/api")
public class productController {
	@Autowired
	private productRepository productRepository;
	
	@PostMapping(value = "/products")
	public productModel addProduct(@RequestBody productDto newProduct) {
		common.LOGGER.info("addProduct is STARTING!!!!!!!!!!-----------!!!!!!!!!");
		productModel pProduct = new productModel(newProduct.toModel());
		return productRepository.save(pProduct);
	}
	
	@GetMapping(value = "/products")
	public List<productModel> GetAllProduct() {
		common.LOGGER.info("GetProduct is STARTING!!!!!!!!!!-----------!!!!!!!!!");
		return productRepository.findAll();
	}
}
