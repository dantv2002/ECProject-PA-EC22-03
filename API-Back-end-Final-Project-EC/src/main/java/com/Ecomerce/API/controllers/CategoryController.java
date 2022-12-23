package com.Ecomerce.API.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.CategoryService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class CategoryController {
	/*>>>>>>>>>> Init Object Service <<<<<<<<<<*/
	@Autowired
	private CategoryService service;
	
	private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
	
	
	/*>>>>>>>>>> API Find manufacturer by category's name <<<<<<<<<<*/
	@GetMapping(value = "/categories/manufacturers")
	public ResponseEntity<ResponseObject> findManufacturerByCategoryName(@RequestParam String name) 
			throws ResourceNotFoundException {
		List<String> manufacturers = service.findManufacturerByCategoryName(name);
		
		if (manufacturers == null || manufacturers.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy các hãng bán sản phẩm này", "");
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Hoàn thành", "Tìm các hãng bán " + name + " thành công", manufacturers));
	}
	
	
	/*>>>>>>>>>> API Find All Category <<<<<<<<<<*/
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
