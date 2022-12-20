package com.Ecomerce.API.utils.converter;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionBasicInfoDto;
import com.Ecomerce.API.models.dtos.AuctionDetailDto;
import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.AuctionDetail;
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
	
	public AuctionBasicInfoDto convertToAuctionBasicInfoDto(AuctionDetail auctionDetail) {
		AuctionBasicInfoDto auctionInfo = new AuctionBasicInfoDto();
		auctionInfo.setPersonOfferingPrice(auctionDetail.getSeller().getAccountName());
		auctionInfo.setOfferedPrice(auctionDetail.getPrice());
		auctionInfo.setComment(auctionDetail.getComment());
		
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.sss");
			auctionInfo.setTimeOffer(sdf.format(auctionDetail.getTimeAuction()));
		}
		catch(Exception e) {
			if (auctionDetail.getTimeAuction() == null) {
				auctionInfo.setTimeOffer(null);
			}
		}
		
		return auctionInfo;
	}
	
//	public AuctionDetailDto convertToAuctionDetailDto(Auction auction) {
//		if (auction == null) {
//			return null;
//		}
//		
//		AuctionDetailDto auctionDetailDto = new AuctionDetailDto();
//		auctionDetailDto.setProductName(auction.getProduct().getName());
//		auctionDetailDto.setImageProduct(auction.getProduct().getImageProduct());
//		auctionDetailDto.setCurrentPrice(auction.getPriceTransaction());
//		
//		List<AuctionBasicInfoDto> infoAuctionsDto = new ArrayList<AuctionBasicInfoDto>();
//		List<AuctionDetail> infoAuctions = auction.getAuctionDetails();
//		for (AuctionDetail infoAuction : infoAuctions) {
//			infoAuctionsDto.add(convertToAuctionBasicInfoDto(infoAuction));
//		}
//		auctionDetailDto.setInfoAuction(infoAuctionsDto);
//	}
}
