package com.Ecomerce.API.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.UserService;

@RestController
@RequestMapping (value = "/api")
public class UserController {
	@Autowired
	UserService service;
	
	@GetMapping (value = "/users")
	public ResponseEntity<ResponseObject> findAll() {
		List<UserDto> usersDto = service.findAll();
		
		if (usersDto.isEmpty() || usersDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không thể lấy tất cả thông tin người dùng", ""));
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Hoàn thành", "Lấy tất cả thông tin người dùng thành công", usersDto));
	}
}
