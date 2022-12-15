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
import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.SearchApiDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.ProductService;

@RestController
@RequestMapping (value = "/api")
@CrossOrigin("http://localhost:3000/")
public class ProductController {
	/*>>>>>>>>>> Init Object Service <<<<<<<<<<*/
	@Autowired
	ProductService service;
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	/*>>>>>>>>>> API Search Product by input value<<<<<<<<<<*/
	@GetMapping("/products/search")
	public ResponseEntity<ResponseObject> searchProduct(@RequestParam String keyValue) throws ResourceNotFoundException {
		List<SearchApiDto> searchProducts = service.searchProduct(keyValue);
		
		if (searchProducts.isEmpty() || searchProducts == null) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm thấy sản phẩm được yêu cầu", "");
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Tìm sản phẩm theo yêu cầu thành công", searchProducts));
	}
	
	
	/*>>>>>>>>>> API Select Product with specific quantity<<<<<<<<<<*/
	@GetMapping (value = "/products")
	public ResponseEntity<ResponseObject> getByAmount(@RequestParam int amount, @RequestParam int pagenumber) {
		logger.info("Get Product By Amount is running !");
		List<ProductDto> listProduct = service.findByAmount(pagenumber, amount);
		return (listProduct != null && !listProduct.isEmpty()) ? 
				ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("Hoàn thành", "Lấy sản phẩm thành công", listProduct))
				:
				ResponseEntity.status(HttpStatus.NOT_FOUND).body(
						new ResponseObject("Thất bại", "Không thể lấy sản phẩm", ""));
	}
}
