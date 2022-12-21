package com.Ecomerce.API.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.ProductInCartDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.CartAndPaymentService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class CartAndPaymentController {
	@Autowired
	CartAndPaymentService service;

	@GetMapping("/auth/user/cart")
	public ResponseEntity<ResponseObject> getProductInCart(@Valid @RequestParam String accountName)
			throws ResourceNotFoundException {
		List<ProductInCartDto> productsInCart = service.getProductInCart(accountName);

		if (productsInCart == null || productsInCart.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy sản phẩm nào trong giỏ hàng", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy các sản phẩm trong giỏ hàng thành công", productsInCart));
	}
}
