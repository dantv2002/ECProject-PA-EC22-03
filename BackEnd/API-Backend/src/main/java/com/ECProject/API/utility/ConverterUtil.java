package com.ECProject.API.utility;

import com.ECProject.API.dto.productDTO;
import com.ECProject.API.entity.productEntity;

public class ConverterUtil {
	
	// For Product Object
	public static productEntity convertToEntity(productDTO ProductDTO) {
		
		productEntity ProductEntity = new productEntity();
		
		ProductEntity.setID(ProductDTO.getID());
		ProductEntity.setName(ProductDTO.getName());
		ProductEntity.setDescription(ProductDTO.getDescription());
		ProductEntity.setManufacturer(ProductDTO.getManufacturer());
		ProductEntity.setImageProduct(ProductDTO.getImageProduct());
		ProductEntity.setCategoryID(ProductDTO.getCategoryID());
		ProductEntity.setAccountName(ProductDTO.getAccountName());
		
		return ProductEntity;
	}
	
	public static productDTO convertToDTO(productEntity ProductEntity) {
		productDTO ProductDTO = new productDTO();
		
		ProductDTO.setID(ProductEntity.getID());
		ProductDTO.setName(ProductEntity.getName());
		ProductDTO.setDescription(ProductEntity.getDescription());
		ProductDTO.setManufacturer(ProductEntity.getManufacturer());
		ProductDTO.setImageProduct(ProductEntity.getImageProduct());
		ProductDTO.setCategoryID(ProductEntity.getCategoryID());
		ProductDTO.setAccountName(ProductEntity.getAccountName());
		
		return ProductDTO;
	}
}
