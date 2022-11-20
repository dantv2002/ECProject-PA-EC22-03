package com.ECProject.API.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ECProject.API.dto.productDTO;
import com.ECProject.API.entity.productEntity;
import com.ECProject.API.repository.productRepository;
import com.ECProject.API.service.productService;
import com.ECProject.API.utility.ConverterUtil;

@Service
public class productServiceImpl implements productService {
	@Autowired
	private productRepository ProductRepository;
	
	@Override
	public List<productDTO> findAll() {
		List<productEntity> ProductEntities = ProductRepository.findAll();
		List<productDTO> ProductDTOs = new ArrayList<productDTO>();
		ProductEntities.forEach(entity -> ProductDTOs.add(ConverterUtil.convertToDTO(entity)));
		
		return ProductDTOs;
	}
	
	// Can bo sung try catch de kiem tra xem them thanh cong hay chua
	@Override
	public String save(productDTO ProductDTO) {
		productEntity ProductEntity = ConverterUtil.convertToEntity(ProductDTO);		
		ProductRepository.save(ProductEntity);		
		return "Đã thêm dữ liệu thành công";
	}
	
	@Override
	public productDTO findByID(int ID) {
		productDTO ProductDTO = null;
		productEntity ProductEntity = ProductRepository.findById(ID).orElse(null);
		ProductDTO = ConverterUtil.convertToDTO(ProductEntity);
		
		return ProductDTO;
	}

	@Override
	public String delete(int ID) {
		productEntity ProductEntity = ProductRepository.findById(ID).orElse(null);
		if (ProductEntity == null) {
			return "Sản phẩm không tồn tại";
		}
		ProductRepository.delete(ProductEntity);
		return "Xóa sản phẩm " + ID + " thành công";
	}
}
