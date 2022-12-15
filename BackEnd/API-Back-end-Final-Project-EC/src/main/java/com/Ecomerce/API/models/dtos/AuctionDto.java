package com.Ecomerce.API.models.dtos;

import java.sql.Time;

public class AuctionDto {
	private int id;
	private String buyer;
	private int productId;
	private Time timeStart;
	private Time timeEnd;
	private int priceTransaction;
	private int priceShipping;
	private int commission;
	private String sellerEnd;
	private int statusAuction;
	private String productName;
	private String imageProduct;
	
	public AuctionDto() {}
	
	public AuctionDto(int id, String buyer, int productId, Time timeStart, Time timeEnd,
			int priceTransaction, int priceShipping, int commission, String sellerEnd, int statusAuction,
			String productName, String imageProduct) {
		this.id = id;
		this.buyer = buyer;
		this.productId = productId;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
		this.priceTransaction = priceTransaction;
		this.priceShipping = priceShipping;
		this.commission = commission;
		this.sellerEnd = sellerEnd;
		this.statusAuction= statusAuction;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBuyer() {
		return buyer;
	}

	public void setBuyer(String buyer) {
		this.buyer = buyer;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public Time getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(Time timeStart) {
		this.timeStart = timeStart;
	}

	public Time getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(Time timeEnd) {
		this.timeEnd = timeEnd;
	}

	public int getPriceTransaction() {
		return priceTransaction;
	}

	public void setPriceTransaction(int priceTransaction) {
		this.priceTransaction = priceTransaction;
	}

	public int getPriceShipping() {
		return priceShipping;
	}

	public void setPriceShipping(int priceShipping) {
		this.priceShipping = priceShipping;
	}

	public int getCommission() {
		return commission;
	}

	public void setCommission(int commission) {
		this.commission = commission;
	}

	public String getSellerEnd() {
		return sellerEnd;
	}

	public void setSellerEnd(String sellerEnd) {
		this.sellerEnd = sellerEnd;
	}

	public int getStatusAuction() {
		return statusAuction;
	}

	public void setStatusAuction(int statusAuction) {
		this.statusAuction = statusAuction;
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
}
