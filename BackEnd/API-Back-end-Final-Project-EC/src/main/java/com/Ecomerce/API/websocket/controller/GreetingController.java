package com.Ecomerce.API.websocket.controller;
import java.util.*;
import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.Ecomerce.API.models.dtos.AuctionDetailDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.AuctionDetail;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.repositories.AuctionDetailRepository;
import com.Ecomerce.API.repositories.AuctionRepository;
import com.Ecomerce.API.services.AuctionService;
import com.Ecomerce.API.utils.converter.AuctionConverter;
import com.Ecomerce.API.websocket.model.AuctionDetailSocketModel;
import com.google.gson.Gson;

@Controller
public class GreetingController {
	@Autowired
	AuctionService service;
	
	@Autowired
	AuctionRepository auctionRepository;
	
	@Autowired
	AuctionDetailRepository auctionDetailRepository;
	
	@Autowired
	AuctionConverter converter;
	
	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public ResponseObject greeting(AuctionDetailSocketModel auctionDetailSocketModel) throws Exception {
		
		//thêm dữ liệu vào auction detail
		try {

			AuctionDetailSocketModel addAuctDet = service.insert(auctionDetailSocketModel);
			
			//thay đổi price_transaction
			
			Boolean check = service.changePrice(auctionDetailSocketModel.getAuctionId(), auctionDetailSocketModel.getPrice());
			
			//trả về dữ liệu
			List<AuctionDetail> auctionDetails = auctionDetailRepository.findAll();
			List<AuctionDetail> list = new ArrayList<>();
			for(AuctionDetail auctionDetail: auctionDetails) {
				if(auctionDetail.getAuction().getId() == auctionDetailSocketModel.getAuctionId()) {
					list.add(auctionDetail);
				}
			}
			
			//AuctionDetailDto auctionDetailDto = converter.convertToAuctionDetailDto(auction, "");
			//List<Auc> auction = service.findAll(auctionDetailSocketModel.getAuctionId());
			if (list.isEmpty()) {
				return new ResponseObject("Thất bại", "Không có phiên đấu giá nào tồn tại", "");
			}
			return new ResponseObject("Hoàn thành", "Lấy các phiên đấu giá thành công", new Gson().toJson(list));
		}
		catch(Exception e){
			return new ResponseObject("Thất bại", "Không có phiên đấu giá nào tồn tại", "");
		}
	}
//
//	@MessageMapping("/room/greeting/{room}")
//	public Greeting greet(@DestinationVariable String room, HelloMessage message) throws Exception {
//		return new Greeting("Hello, " + message.getName() + "!");
//	}

}