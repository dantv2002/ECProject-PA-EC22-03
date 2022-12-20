package com.Ecomerce.API.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/users")
	public UserDto insert(@RequestBody UserDto userDto) {
		if (service.save(userDto) != null) {
			return userDto;
		}
		return null;
	}
}
