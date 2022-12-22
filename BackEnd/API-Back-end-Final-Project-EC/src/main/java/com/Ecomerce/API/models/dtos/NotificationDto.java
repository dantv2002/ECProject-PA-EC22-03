package com.Ecomerce.API.models.dtos;


public class NotificationDto {
	private int id;
	private String accountName;
	private String time;
	private boolean status;
	private int auctionId;
	private String buyer;
	private int productId;
	private String timeStart;
	private String timeEnd;
	private int priceTransaction;
	private int priceShipping;
	private int commission;
	private String sellerEnd;
	private int statusAuction;
	private String productName;
	private String imageProduct;
	private boolean type;
	
	public NotificationDto() {}

	public NotificationDto(int id, String accountName, String time, boolean status, int auctionId, String buyer,
			int productId, String timeStart, String timeEnd, int priceTransaction, int priceShipping,
			int commission, String sellerEnd, int statusAuction, String productName, String imageProduct) {
		super();
		this.id = id;
		this.accountName = accountName;
		this.time = time;
		this.status = status;
		this.auctionId = auctionId;
		this.buyer = buyer;
		this.productId = productId;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
		this.priceTransaction = priceTransaction;
		this.priceShipping = priceShipping;
		this.commission = commission;
		this.sellerEnd = sellerEnd;
		this.statusAuction = statusAuction;
		this.productName = productName;
		this.imageProduct = imageProduct;
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

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
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

	public boolean isType() {
		return type;
	}

	public void setType(boolean type) {
		this.type = type;
	}	
}
