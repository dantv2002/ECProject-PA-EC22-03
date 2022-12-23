package com.Ecomerce.API.models.dtos;

import java.sql.Timestamp;
import java.util.Date;

public class AuctionDto {
	private int id;
	private String buyer;
	private String nameBuyer;
	private int productId;
	private String timeStart;
	private String timeEnd;
	private int priceTransaction;
	private int priceShipping;
	private int commission;
	private String sellerEnd;
	private String nameSellerEnd;
	private int statusAuction;
	private String productName;
	private String imageProduct;
	
	public AuctionDto() {}
	
	public AuctionDto(int id, String buyer, int productId, String timeStart, String timeEnd,
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

	public String getNameBuyer() {
		return nameBuyer;
	}

	public void setNameBuyer(String nameBuyer) {
		this.nameBuyer = nameBuyer;
	}

	public String getNameSellerEnd() {
		return nameSellerEnd;
	}

	public void setNameSellerEnd(String nameSellerEnd) {
		this.nameSellerEnd = nameSellerEnd;
	}
}
