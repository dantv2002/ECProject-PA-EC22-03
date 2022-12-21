package com.Ecomerce.API.controllers;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ExceptionCustom;
import com.Ecomerce.API.exceptions.ResourceNotFoundException;
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
	
	@GetMapping(value = "/auth/user/users/checkproductofuser")
	public ResponseEntity<ResponseObject> isUserSellingThisProduct(@Valid @RequestParam String userName, 
			@Valid @RequestParam int productId) throws ExceptionCustom {
		boolean check = service.isUserSellingThisProduct(userName, productId);
		
		if (check) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ResponseObject("Thành công", "Người dùng " + userName +  " có bán sản phẩm này", check));
		}
		throw new ExceptionCustom("Thất bại", "Người dùng " + userName +  " không bán sản phẩm này", check);
	}
}
