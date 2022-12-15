package com.Ecomerce.API.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.services.AuctionService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class AuctionController {
	@Autowired
	AuctionService service;
	
	/*>>>>>>>>>> API Find auction is during <<<<<<<<<<*/
	@GetMapping(value = "/auctions/auctionings")
	public ResponseEntity<ResponseObject> findAuctionIsHappeningAndIsWaiting(@RequestParam int amount) {
		List<AuctionDto> auctionsDto = service.findAuctionIsHappening(amount);
		
		if(auctionsDto.isEmpty() || auctionsDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
					new ResponseObject("Thất bại", "Không có phiên đấu giá nào tồn tại", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Hoàn thành", "Lấy các phiên đấu giá thành công", auctionsDto));
	}
}
