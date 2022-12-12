package com.Ecomerce.API.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.CategoryService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
	
	@GetMapping(value = "/categories/{id}")
	public ResponseEntity<ResponseObject> findById(@PathVariable int id) throws ResourceNotFoundException {
		logger.info("FIND CATEGORY BY ID IS STARTING !");
		CategoryDto categoryDto = service.findById(id);	
		if (categoryDto == null) {
			logger.info("NOT FOUND CATEGORY !");
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy loại sản phẩm", "");
		}
		logger.info("FIND CATEGORY BY ID SUCCESSFULLY !");
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Tìm kiếm sản phẩm theo Id thành công", categoryDto));
	}
	
	@GetMapping(value = "/categories")
	public ResponseEntity<ResponseObject> findAll() throws ResourceNotFoundException {
		logger.info("FIND ALL CATEGORY IS STARTING !");
		List<CategoryDto> categoriesDto = service.findAll();
		
		if (categoriesDto == null) {
			logger.info("NOT FOUND ALL CATEGORY !");
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy tất cả loại sản phẩm", "");		
		}
		logger.info("FIND ALL CATEGORY SUCCESSFULLY !");
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Lấy tất cả loại sản phẩm thành công", categoriesDto));
	}
}
