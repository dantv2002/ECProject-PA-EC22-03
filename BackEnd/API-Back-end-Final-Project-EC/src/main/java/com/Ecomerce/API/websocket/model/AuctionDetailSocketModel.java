package com.Ecomerce.API.websocket.model;

public class AuctionDetailSocketModel {
	private int auctionId;
	private String seller;
	private int price;
	private String timeAuction;
	private String comment;

	public AuctionDetailSocketModel(int auctionId, String seller, int price, String timeAuction, String comment) {
		super();
		this.auctionId = auctionId;
		this.seller = seller;
		this.price = price;
		this.timeAuction = timeAuction;
		this.comment = comment;
	}

	public AuctionDetailSocketModel() {
		super();
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getTimeAuction() {
		return timeAuction;
	}

	public void setTimeAuction(String timeAuction) {
		this.timeAuction = timeAuction;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
