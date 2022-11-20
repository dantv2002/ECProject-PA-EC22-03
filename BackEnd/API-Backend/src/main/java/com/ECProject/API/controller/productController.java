package com.ECProject.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ECProject.API.common.common;
import com.ECProject.API.dto.productDTO;
import com.ECProject.API.entity.productEntity;
import com.ECProject.API.service.productService;

@RestController
@RequestMapping(value = "/api")
public class productController {
	@Autowired
	private productService ProductService;
	
	@PostMapping(value = "/products")
	public String addProduct(@RequestBody productDTO newProduct) {
		common.LOGGER.info("Add product is STARTING !!!!!!!");
		ProductService.save(newProduct);
		return "Đã thêm sản phẩm thành công";
	}
	
	@GetMapping(value = "/products")
	public List<productDTO> getAllProduct() {
		common.LOGGER.info("Get product is starting");
		List<productDTO> Products = ProductService.findAll();
		return Products;
	}
	
	@PutMapping(value = "/products/{ID}")
	public String editProduct(@PathVariable(value = "ID") Integer ID, @RequestBody productDTO newProduct) {
		common.LOGGER.info("Edit product is STARTING !!!!!!!");
		productDTO oldProduct = ProductService.findByID(ID);
		if (oldProduct != null) {
			oldProduct.setName(newProduct.getName());
			oldProduct.setDescription(newProduct.getDescription());
			oldProduct.setManufacturer(newProduct.getManufacturer());
			oldProduct.setImageProduct(newProduct.getImageProduct());
			oldProduct.setCategoryID(newProduct.getCategoryID());
			oldProduct.setAccountName(newProduct.getAccountName());
			
			ProductService.save(oldProduct);
			return "Đã sửa sản phẩm thành công";
		}
		return "Sản phẩm không tồn tại";
	}
	
	@DeleteMapping(value = "/products/{ID}") 
	public String deleteProduct(@PathVariable(value = "ID") Integer ID) {
		common.LOGGER.info("Delete product is STARTING !!!!!!!");
		return ProductService.delete(ID);
	}
}
