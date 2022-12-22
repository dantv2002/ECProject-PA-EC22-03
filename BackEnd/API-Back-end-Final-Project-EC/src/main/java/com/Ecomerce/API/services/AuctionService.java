package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.AuctionDetailDto;
import com.Ecomerce.API.models.dtos.AuctionDto;

public interface AuctionService {
	List<AuctionDto> findAuctionIsHappening(int amount);
	AuctionDetailDto displayAuctionDetail(int id, String accountName); 
	boolean deleteAuction(int id);
	List<AuctionDto> findAllAuction();
}
