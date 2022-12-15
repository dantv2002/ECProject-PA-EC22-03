package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.AuctionDto;

public interface AuctionService {
	List<AuctionDto> findAuctionIsHappeningAndIsWaiting(int amount);
}
