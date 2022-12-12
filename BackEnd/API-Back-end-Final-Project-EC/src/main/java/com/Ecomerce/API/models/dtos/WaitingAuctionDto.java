package com.Ecomerce.API.models.dtos;

public class WaitingAuctionDto {
	private int id;
	private int productId;
	private String buyer;
	
	public WaitingAuctionDto() {}
	
	public WaitingAuctionDto(int id, int productId, String buyer) {
		this.id = id;
		this.productId = productId;
		this.buyer = buyer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getBuyer() {
		return buyer;
	}

	public void setBuyer(String buyer) {
		this.buyer = buyer;
	}
}