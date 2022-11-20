package com.ECProject.API.service;

import java.util.List;

import com.ECProject.API.dto.*;

public interface productService {
	List<productDTO> findAll();
	productDTO save(productDTO ProductDTO);
	productDTO findByID(int ID);
	productDTO delete(int ID);
}
