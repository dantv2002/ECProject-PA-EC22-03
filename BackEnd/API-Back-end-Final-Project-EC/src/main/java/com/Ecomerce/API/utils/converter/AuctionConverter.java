package com.Ecomerce.API.utils.converter;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.User;

@Service
public class AuctionConverter {
	
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
		auctionDto.setProductName(auction.getProduct().getName());
		auctionDto.setImageProduct(auction.getProduct().getImageProduct());
		
		User sellerEnd = auction.getSellerEnd();
		auctionDto.setSellerEnd(sellerEnd == null ? null : sellerEnd.getAccountName());
		
		auctionDto.setStatusAuction(auction.getStatusAuction().getId());
		
		return auctionDto;
	}
}
