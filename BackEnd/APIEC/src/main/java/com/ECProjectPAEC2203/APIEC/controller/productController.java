package com.ECProjectPAEC2203.APIEC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ECProjectPAEC2203.APIEC.model.productModel;
import com.ECProjectPAEC2203.APIEC.repository.productRepository;

@RestController
@RequestMapping(value = "/api")
public class productController {
	@Autowired
	private productRepository productRepository;
	
	@PostMapping("/products")
	public productModel addProduct(@RequestBody productModel product) {
		productModel pProduct = new productModel();

		pProduct.setProduct_id(product.getProduct_id());
		pProduct.setProduct_name(product.getProduct_name());
		pProduct.setShort_Desciption(product.getShort_Desciption());
		pProduct.setDescription_Details(product.getDescription_Details());
		pProduct.setStatus(product.getStatus());
		pProduct.setColor(product.getColor());
		pProduct.setSize(product.getSize());
		pProduct.setWeight_product(product.getWeight_product());
		pProduct.setImage_product(product.getImage_product());
		pProduct.setCategory_id(product.getCategory_id());
		return productRepository.save(pProduct);
	}
}
