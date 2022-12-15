package com.Ecomerce.API.utils.converter;

import java.text.SimpleDateFormat;

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
		
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.sss");
			auctionDto.setTimeStart(sdf.format(auction.getTimeStart()));
			auctionDto.setTimeEnd(sdf.format(auction.getTimeEnd()));
		}
		catch(Exception e) {
			if (auction.getTimeStart() == null) {
				auction.setTimeStart(null);
			}
			if (auction.getTimeEnd() == null) {
				auction.setTimeEnd(null);
			}
		}
		
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
