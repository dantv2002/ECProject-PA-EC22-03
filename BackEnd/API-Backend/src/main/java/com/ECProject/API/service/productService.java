package com.ECProject.API.service;

import java.util.List;

import com.ECProject.API.dto.*;

public interface productService {
	List<productDTO> findAll();
	String save(productDTO ProductDTO);
	productDTO findByID(int ID);
	String delete(int ID);
}
