package com.Ecomerce.API.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.DataPaymentDto;
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
	
	@PostMapping("/auth/user/payment")
	public ResponseEntity<ResponseObject> priceShipping(@Valid @RequestBody List<Integer> listAuctionId)
			throws ResourceNotFoundException {
		List<DataPaymentDto> dataPayment = service.priceShipping(listAuctionId);

		if (dataPayment == null || dataPayment.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tính được chi phí ship các phiên đấu già này", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Tính chi phí ship cho các phiên đấu giá thành công", dataPayment));
	}
	
	@GetMapping("/payment/currencyexchange")
	public ResponseEntity<ResponseObject> currencyExchange(@Valid @RequestParam double VND)
			throws ResourceNotFoundException {
		double Dollar = service.convertFromVNDtoDollar(VND);

		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Đổi ngoại tệ thành công", Dollar));
	}
	
	@PostMapping("/auth/user/payment/orders")
	public ResponseEntity<ResponseObject> saveOrder(@Valid @RequestBody List<Integer> listAuctionId)
			throws ResourceNotFoundException {
		boolean check = service.saveOrder(listAuctionId);

		if (!check) {
			throw new ResourceNotFoundException("Thất bại", "Có lỗi xảy ra trong quá trình tạo đơn hàng", check);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Tạo đơn hàng thành công", check));
	}
}
