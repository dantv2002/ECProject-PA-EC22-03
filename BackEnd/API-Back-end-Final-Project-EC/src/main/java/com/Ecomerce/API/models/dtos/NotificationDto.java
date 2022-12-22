package com.Ecomerce.API.models.dtos;

import java.security.Timestamp;

public class NotificationDto {
	private int id;
	private String accountName;
	private int idProduct;
	private Timestamp time;
	private int auctionId;
	private boolean status;
	private String productName;
	private String imageProduct;
	private AuctionDto auctionDto;
	
	public NotificationDto() {}
	
	public NotificationDto(int id, String accountName, int idProduct, Timestamp time, int auctionId, boolean status,
			String productName, String imageProduct, AuctionDto auctionDto) {
		super();
		this.id = id;
		this.accountName = accountName;
		this.idProduct = idProduct;
		this.time = time;
		this.auctionId = auctionId;
		this.status = status;
		this.productName = productName;
		this.imageProduct = imageProduct;
		this.auctionDto = auctionDto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public int getIdProduct() {
		return idProduct;
	}

	public void setIdProduct(int idProduct) {
		this.idProduct = idProduct;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
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

	public AuctionDto getAuctionDto() {
		return auctionDto;
	}

	public void setAuctionDto(AuctionDto auctionDto) {
		this.auctionDto = auctionDto;
	}
	
	
}
