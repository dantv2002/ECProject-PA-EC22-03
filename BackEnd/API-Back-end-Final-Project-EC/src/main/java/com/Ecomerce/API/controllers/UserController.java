package com.Ecomerce.API.controllers;


import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ExceptionCustom;
import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.NotificationDto;
import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.security.JwtTokenUtil;
import com.Ecomerce.API.services.UserService;

@RestController
@RequestMapping (value = "/api")
@CrossOrigin("http://localhost:3000/")
public class UserController {
	@Autowired
	UserService service;
	@Autowired
	JwtTokenUtil jwtTokenUtil;
	
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
	
	@GetMapping(value = "/auth/user/users/info")
	public ResponseEntity<ResponseObject> findInfoCurrentUser(@RequestHeader("Authorization") String token) throws ResourceNotFoundException {
		String accountname = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		UserInfoDto userDto = service.findInfoCurrentUser(accountname);
		
		if (userDto == null) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm được thông tin cho user " + accountname, "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Tìm thông tin cho user " + accountname + " thành công", userDto));
	}
	
	@PostMapping(value = "/auth/user/users/info")
	public ResponseEntity<ResponseObject> insertAndupdateInfoUser(@RequestHeader("Authorization") String token
			, @Valid @RequestBody UserInfoDto userDto) throws ResourceNotFoundException, ParseException {
		String accountName = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		boolean check = service.insertAndUpdate(accountName, userDto);
		
		if (check == false) {
			throw new ResourceNotFoundException("Thất bại", "Không cập nhật được thông tin cho user " + accountName, "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Cập nhật thành công thông tin cho user " + accountName 
						, userDto));
	}
	
	@GetMapping(value = "/auth/user/users/notification")
	public ResponseEntity<ResponseObject> getNotificationOfUser(@RequestHeader("Authorization") String token) 
			throws ResourceNotFoundException, ParseException {
		String accountName = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<NotificationDto> dtos = service.getNotificationOfUser(accountName);
		
		if (dtos == null || dtos.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không lấy được các thông báo của người dùng", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các thông báo của người dùng thành công" , dtos));
	}
}
