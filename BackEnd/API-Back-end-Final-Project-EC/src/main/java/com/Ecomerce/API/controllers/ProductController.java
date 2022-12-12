package com.Ecomerce.API.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.ProductService;

@RestController
@RequestMapping (value = "/api")
public class ProductController {
	@Autowired
	ProductService service;
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	@GetMapping (value = "/products")
	public ResponseEntity<ResponseObject> getAll() {
		logger.info("Get All Product is running !");
		List<ProductDto> listProduct = service.findAll();
		
		return (listProduct != null && !listProduct.isEmpty()) ? 
				ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("Hoàn thành", "Lấy tất cả sản phẩm thành công", listProduct))
				:
				ResponseEntity.status(HttpStatus.NOT_FOUND).body(
						new ResponseObject("Thất bại", "Không thể lấy tất cả sản phẩm", ""));
	}
	
	@GetMapping (value = "/products/{id}")
	public ResponseEntity<ResponseObject> getById(@PathVariable int id) {
		logger.info("Get Product by id is running !");
		ProductDto productDto = service.findById(id);
		
		return (productDto != null) ? 
				ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("Hoàn thành", "Lấy sản phẩm theo id thành công", productDto))
				:
				ResponseEntity.status(HttpStatus.NOT_FOUND).body(
						new ResponseObject("Thất bại", "Không thể lấy sản phẩm theo id", ""));
	}
	
	@PostMapping (value = "/products")
	public ResponseEntity<ResponseObject> insert (@RequestBody ProductDto newProduct) {
		logger.info("Insert Product is running !");
		ProductDto productInserted = service.save(newProduct);
		return productInserted != null ? 
				ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("Hoàn thành", "Thêm sản phẩm thành công", newProduct))
				:
				ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
						new ResponseObject("Thất bại", "Thêm sản phẩm không thành công", ""));
	}
	
	@PutMapping (value = "/products/{id}")
	public ResponseEntity<ResponseObject> update (@PathVariable(value = "id") Integer id, 
			@RequestBody ProductDto newProduct) {
		logger.info("Update Product is running !");
		ProductDto productUpdated = service.update(id, newProduct);
		
		if (productUpdated == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không tìm thấy sản phẩm cần cập nhật", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Cập nhật sản phẩm thành công", productUpdated));
	}
	
	@DeleteMapping (value = "/products/{id}") 
	public ResponseEntity<ResponseObject> delete (@PathVariable(value = "id") Integer id) {
		logger.info("Delete Product is running !");
		ProductDto productDeleted = service.delete(id);
		
		if (productDeleted == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không tìm thấy sản phẩm cần xóa", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Xóa sản phẩm thành công", productDeleted));	
	}
}
