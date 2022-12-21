package com.Ecomerce.API.models.dtos;

import java.util.List;

public class AuctionDetailDto {
	private int productId;
	private String productName;
	private String imageProduct;
	private int currentPrice;
	private List<AuctionBasicInfoDto> infoAuction;
	private String timeStart;
	private String timeEnd;
	private int startPrice;
	private int amountSeller;
	private int auctionId;
	private String buyer;
	private String nameBuyer;
	private int statusOfCurrentUser;
	
	public AuctionDetailDto() {}

	public AuctionDetailDto(String productName, String imageProduct, int currentPrice,
			List<AuctionBasicInfoDto> infoAuction, String timeStart, String timeEnd, int startPrice, int amountSeller,
			int auctionId, String buyer) {
		this.productName = productName;
		this.imageProduct = imageProduct;
		this.currentPrice = currentPrice;
		this.infoAuction = infoAuction;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
		this.startPrice = startPrice;
		this.amountSeller = amountSeller;
		this.auctionId = auctionId;
		this.buyer = buyer;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getImageProduct() {
		return imageProduct;
	}

	public void setImageProduct(String imageProduct) {
		this.imageProduct = imageProduct;
	}

	public int getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(int currentPrice) {
		this.currentPrice = currentPrice;
	}

	public List<AuctionBasicInfoDto> getInfoAuction() {
		return infoAuction;
	}

	public void setInfoAuction(List<AuctionBasicInfoDto> infoAuction) {
		this.infoAuction = infoAuction;
	}

	public String getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(String timeStart) {
		this.timeStart = timeStart;
	}

	public String getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(String timeEnd) {
		this.timeEnd = timeEnd;
	}

	public int getStartPrice() {
		return startPrice;
	}

	public void setStartPrice(int startPrice) {
		this.startPrice = startPrice;
	}

	public int getAmountSeller() {
		return amountSeller;
	}

	public void setAmountSeller(int amountSeller) {
		this.amountSeller = amountSeller;
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public String getBuyer() {
		return buyer;
	}

	public void setBuyer(String buyer) {
		this.buyer = buyer;
	}

	public String getNameBuyer() {
		return nameBuyer;
	}

	public void setNameBuyer(String nameBuyer) {
		this.nameBuyer = nameBuyer;
	}

	public int getStatusOfCurrentUser() {
		return statusOfCurrentUser;
	}

	public void setStatusOfCurrentUser(int statusOfCurrentUser) {
		this.statusOfCurrentUser = statusOfCurrentUser;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}
}
