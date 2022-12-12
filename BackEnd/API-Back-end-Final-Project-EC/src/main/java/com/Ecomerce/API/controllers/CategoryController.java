package com.Ecomerce.API.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.CategoryDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.CategoryService;

@RestController
@RequestMapping(value = "/api")
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	@GetMapping(value = "/categories/{id}")
	public ResponseEntity<ResponseObject> findById(@PathVariable int id) {
		CategoryDto categoryDto = service.findById(id);
		
		if (categoryDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không tìm thấy loại sản phẩm", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Tìm kiếm sản phẩm theo Id thành công", categoryDto));
	}
	
	@GetMapping(value = "/categories")
	public ResponseEntity<ResponseObject> findAll() {
		List<CategoryDto> categoriesDto = service.findAll();
		
		if (categoriesDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không thể lấy tất cả loại sản phẩm", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Lấy tất cả loại sản phẩm thành công", categoriesDto));
	}
}
