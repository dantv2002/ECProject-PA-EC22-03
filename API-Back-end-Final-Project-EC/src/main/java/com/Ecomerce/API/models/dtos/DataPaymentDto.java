package com.Ecomerce.API.models.dtos;

public class DataPaymentDto {
	private int auctionId;
	private int priceShipping;
	
	public DataPaymentDto() {}

	public DataPaymentDto(int auctionId, int priceShipping) {	
		this.auctionId = auctionId;
		this.priceShipping = priceShipping;
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public int getPriceShipping() {
		return priceShipping;
	}

	public void setPriceShipping(int priceShipping) {
		this.priceShipping = priceShipping;
	}
}
