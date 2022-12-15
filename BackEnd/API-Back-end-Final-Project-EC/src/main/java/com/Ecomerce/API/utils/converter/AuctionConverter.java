package com.Ecomerce.API.utils.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.StatusAuctionRepository;
import com.Ecomerce.API.repositories.UserRepository;

@Service
public class AuctionConverter {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private StatusAuctionRepository statusAuctionRepository;
	
	public AuctionDto convertToDto(Auction auction) {
		AuctionDto auctionDto = new AuctionDto();
		auctionDto.setId(auction.getId());
		auctionDto.setBuyer(auction.getBuyer().getAccountName());
		auctionDto.setProductId(auction.getProduct().getId());
		auctionDto.setTimeStart(auction.getTimeStart());
		auctionDto.setTimeEnd(auction.getTimeEnd());
		auctionDto.setPriceTransaction(auction.getPriceTransaction());
		auctionDto.setPriceShipping(auction.getPriceShipping());
		auctionDto.setCommission(auction.getCommission());
		
		User sellerEnd = auction.getSellerEnd();
		auctionDto.setSellerEnd(sellerEnd == null ? null : sellerEnd.getAccountName());
		
		auctionDto.setStatusAuction(auction.getStatusAuction().getId());
		
		return auctionDto;
	}
	
	public Auction convertToEntity(AuctionDto auctionDto) {
		Auction auction = new Auction();
		auction.setId(auctionDto.getId());
		auction.setBuyer(userRepository.findById(auctionDto.getBuyer()).orElse(null));
		auction.setTimeStart(auctionDto.getTimeStart());
		auction.setTimeEnd(auction.getTimeEnd());
		auction.setPriceTransaction(auctionDto.getPriceTransaction());
		auction.setPriceShipping(auctionDto.getPriceShipping());
		auction.setCommission(auctionDto.getCommission());
		auction.setSellerEnd(userRepository.findById(auctionDto.getSellerEnd()).orElse(null));
		auction.setStatusAuction(statusAuctionRepository.findById(auctionDto.getStatusAuction()).orElse(null));
			
		return auction;
	}
}
