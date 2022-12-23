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
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;
import com.Ecomerce.API.models.dtos.NotificationDto;
import com.Ecomerce.API.models.dtos.OrderOfUserDto;
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
	
	@PutMapping(value = "/auth/user/users/notification/delete")
	public ResponseEntity<ResponseObject> getNotificationOfUser(@Valid @RequestParam int id) 
			throws ResourceNotFoundException {
		boolean check = service.deleteNotification(id);
		
		if (!check) {
			throw new ResourceNotFoundException("Thất bại", "Không thể xóa thông báo", check);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Xóa thông báo thành công" , check));
	}
	
	@GetMapping(value = "/auth/user/users/orders")
	public ResponseEntity<ResponseObject> getOrderOfUser(@RequestHeader("Authorization") String token) 
			throws ResourceNotFoundException {
		String accountName = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<OrderOfUserDto> orderOfUserDtos = service.getOrderOfUser(accountName);
		
		if (orderOfUserDtos == null || orderOfUserDtos.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy các đơn hàng", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các đơn hàng thành công" , orderOfUserDtos));
	}
	
	@GetMapping(value = "/auth/user/users/detailorders")
	public ResponseEntity<ResponseObject> getDetailOrderOfUser(@Valid @RequestParam int id) 
			throws ResourceNotFoundException {
		DetailOrderOfUserDto orderOfUserDtos = service.getDetailOrderOfUser(id);
		
		if (orderOfUserDtos == null) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy chi tiết đơn hàng", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy chi tiết đơn hàng thành công" , orderOfUserDtos));
	}
	
	@PutMapping(value = "/auth/user/users/orders/changestatus")
	public ResponseEntity<ResponseObject> changeStatusOrder(@Valid @RequestParam int id) 
			throws ResourceNotFoundException {
		boolean check = service.changeStatusOrder(id);
		
		if (!check) {
			throw new ResourceNotFoundException("Thất bại", "Không thể chuyển trạng thái đơn hàng", check);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Chuyển trạng thái đơn hàng thành công" , check));
	}
}
