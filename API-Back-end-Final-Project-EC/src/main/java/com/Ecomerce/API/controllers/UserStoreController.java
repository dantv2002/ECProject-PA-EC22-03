package com.Ecomerce.API.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;
import com.Ecomerce.API.models.dtos.OrderOfUserDto;
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.security.JwtTokenUtil;
import com.Ecomerce.API.services.UserStoreService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class UserStoreController {
	@Autowired
	JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	UserStoreService service;
	
	@PostMapping("/auth/user/userstore")
	public ResponseEntity<ResponseObject> insertProduct(@RequestBody ProductDto productDto) 
			throws ResourceNotFoundException {
		boolean check = service.insertProduct(productDto);
		
		if (check) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ResponseObject("Thành công", "Thêm sản phẩm thành công", check));
		}
		throw new ResourceNotFoundException("Thất bại", "Không thể thêm sản phẩm", check);
	}
	
	@PutMapping("/auth/user/userstore")
	public ResponseEntity<ResponseObject> updateProduct(@RequestParam int id, @RequestBody ProductDto productDto) 
			throws ResourceNotFoundException {
		boolean check = service.updateProduct(id, productDto);
		
		if (check) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ResponseObject("Thành công", "Cập nhật sản phẩm thành công", check));
		}
		throw new ResourceNotFoundException("Thất bại", "Không thể cập nhật sản phẩm", check);
	}
	
	@DeleteMapping("/auth/user/userstore")
	public ResponseEntity<ResponseObject> deleteProduct(@RequestParam int id) 
			throws ResourceNotFoundException {
		boolean check = service.deleteProduct(id);
		
		if (check) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ResponseObject("Thành công", "Xóa sản phẩm thành công", check));
		}
		throw new ResourceNotFoundException("Thất bại", "Không thể xóa sản phẩm", check);
	}
	
	@GetMapping(value = "/auth/user/userstore/orders")
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
	
	@GetMapping(value = "/auth/user/userstore/detailorders")
	public ResponseEntity<ResponseObject> getDetailOrderOfUser(@Valid @RequestParam int id) 
			throws ResourceNotFoundException {
		DetailOrderOfUserDto orderOfUserDtos = service.getDetailOrderOfUser(id);
		
		if (orderOfUserDtos == null) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy chi tiết đơn hàng", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy chi tiết đơn hàng thành công" , orderOfUserDtos));
	}
	
	@PutMapping(value = "/auth/user/userstore/orders/changestatus")
	public ResponseEntity<ResponseObject> changeStatusOrder(@Valid @RequestParam int id) 
			throws ResourceNotFoundException {
		boolean check = service.changeStatusOrder(id);
		
		if (!check) {
			throw new ResourceNotFoundException("Thất bại", "Không thể chuyển trạng thái đơn hàng", check);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Chuyển trạng thái đơn hàng thành công" , check));
	}
	
	@GetMapping(value = "/auth/user/userstore/auctions")
	public ResponseEntity<ResponseObject> getAuctionThatUserJoined(@RequestHeader("Authorization") String token) 
			throws ResourceNotFoundException {
		String accountName = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<AuctionDto> auctions = service.getAuctionThatUserJoined(accountName);
		
		if (auctions == null || auctions.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy các phiên đấu giá", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các phiên đấu giá thành công" , auctions));
	}
	
	@GetMapping(value = "/auth/user/userstore/products")
	public ResponseEntity<ResponseObject> getProductByCategory(@RequestHeader("Authorization") String token, 
			@Valid @RequestParam String categoryName) 
			throws ResourceNotFoundException {
		String accountName = jwtTokenUtil.getUsernameFromToken(token.substring(7));
		List<ProductDto> productsDto = service.findProductWithCategory(categoryName, accountName);
		
		if (productsDto == null || productsDto.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy các sản phẩm", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các sản phẩm thành công" , productsDto));
	}
	
	@GetMapping(value = "/userstore/products")
	public ResponseEntity<ResponseObject> getProductByCategoryWithoutToken(@Valid @RequestParam String categoryName, 
			@Valid @RequestParam String accountName) 
			throws ResourceNotFoundException {
	
		List<ProductDto> productsDto = service.findProductWithCategory(categoryName, accountName);
		
		if (productsDto == null || productsDto.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy các sản phẩm", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các sản phẩm thành công" , productsDto));
	}
}
