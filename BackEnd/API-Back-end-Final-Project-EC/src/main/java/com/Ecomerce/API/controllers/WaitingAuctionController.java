package com.Ecomerce.API.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.ProductDto;
import com.Ecomerce.API.models.dtos.WaitingAuctionDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.WaitingAuctionService;

@RestController
@RequestMapping("/api")
public class WaitingAuctionController {
	@Autowired
	WaitingAuctionService service;

	@GetMapping("/waitingauctions")
	public ResponseEntity<ResponseObject> findAll() {
		List<WaitingAuctionDto> waitingAuctionsDto = service.findAll();
		
		if(waitingAuctionsDto.isEmpty() || waitingAuctionsDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Hiện tại không phiên đấu giá nào đang chờ", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Thành công", "Lấy tất cả các phiên đấu giá đang chờ thành công", 
						waitingAuctionsDto));
	}

}
