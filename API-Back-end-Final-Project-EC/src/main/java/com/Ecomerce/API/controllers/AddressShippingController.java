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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.exceptions.ResourceNotFoundException;
import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.dtos.AddressShippingInsertDto;
import com.Ecomerce.API.models.dtos.DistrictDto;
import com.Ecomerce.API.models.dtos.WardDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.AddressShippingService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class AddressShippingController {
	@Autowired
	AddressShippingService service;

	@GetMapping("/auth/user/shippingaddress")
	public ResponseEntity<ResponseObject> getShippingAddress(@Valid @RequestParam String accountName)
			throws ResourceNotFoundException {
		List<AddressShippingDto> listShippingAddress = service.getShippingAddress(accountName);

		if (listShippingAddress == null || listShippingAddress.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không tìm địa chỉ giao hàng nào", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy địa chỉ giao hàng thành công", listShippingAddress));
	}

	@PostMapping("/auth/user/shippingaddress")
	public ResponseEntity<ResponseObject> insert(@RequestBody AddressShippingInsertDto addressShippingDto)
			throws ResourceNotFoundException {
		boolean check = service.insert(addressShippingDto);

		if (!check) {
			throw new ResourceNotFoundException("Thất bại", "Không thể thêm dữ liệu vào database", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Thêm địa chỉ thành công", addressShippingDto));
	}

	@DeleteMapping("/auth/user/shippingaddress")
	public ResponseEntity<ResponseObject> delete(@Valid @RequestParam int id) throws ResourceNotFoundException {
		AddressShippingInsertDto addressShipping = service.delete(id);

		if (addressShipping == null) {
			throw new ResourceNotFoundException("Thất bại", "Không thể xóa dữ liệu khỏi database", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Xóa địa chỉ thành công", addressShipping));
	}

	@GetMapping("/auth/user/shippingaddress/district")
	public ResponseEntity<ResponseObject> findAllDistrict() throws ResourceNotFoundException {
		List<DistrictDto> districts = service.findAllDistrict();

		if (districts == null || districts.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy danh sách các Quận", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy danh sách các Quận thành công", districts));
	}
	
	@GetMapping("/auth/user/shippingaddress/ward")
	public ResponseEntity<ResponseObject> findWardByDistrict(@Valid @RequestParam int districtId)
			throws ResourceNotFoundException {
		
		List<WardDto> wards = service.findWardByDistrict(districtId);

		if (wards == null || wards.isEmpty()) {
			throw new ResourceNotFoundException("Thất bại", "Không thể lấy danh sách các Huyện", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Lấy danh sách các Huyện thành công", wards));
		
	}
	
	@PutMapping("/auth/user/shippingaddress")
	public ResponseEntity<ResponseObject> update(@Valid @RequestParam int id, 
			@RequestBody AddressShippingInsertDto addressShippingDto) throws ResourceNotFoundException {
		AddressShippingInsertDto addressShippingToResponse = service.update(id, addressShippingDto);

		if (addressShippingToResponse == null) {
			throw new ResourceNotFoundException("Thất bại", "Không thể cập nhật dữ liệu vào database", "");
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseObject("Thành công", "Cập nhật địa chỉ thành công", addressShippingToResponse));
	}
}
