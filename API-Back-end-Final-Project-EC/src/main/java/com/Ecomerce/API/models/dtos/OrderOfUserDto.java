package com.Ecomerce.API.models.dtos;

public class OrderOfUserDto {
	private int orderId;
	private int productId;
	private String productName;
	private String imageProduct;
	private String buyerAccount;
	private String buyerName;
	private String sellerAccount;
	private String sellerName;
	private int statusOrder;
	
	public OrderOfUserDto() {}

	public OrderOfUserDto(int productId, String productName, String imageProduct, String buyerAccount, String buyerName,
			String sellerAccount, String sellerName, int statusOrder) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.imageProduct = imageProduct;
		this.buyerAccount = buyerAccount;
		this.buyerName = buyerName;
		this.sellerAccount = sellerAccount;
		this.sellerName = sellerName;
		this.statusOrder = statusOrder;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
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

	public String getBuyerAccount() {
		return buyerAccount;
	}

	public void setBuyerAccount(String buyerAccount) {
		this.buyerAccount = buyerAccount;
	}

	public String getBuyerName() {
		return buyerName;
	}

	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
	}

	public String getSellerAccount() {
		return sellerAccount;
	}

	public void setSellerAccount(String sellerAccount) {
		this.sellerAccount = sellerAccount;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public int getStatusOrder() {
		return statusOrder;
	}

	public void setStatusOrder(int statusOrder) {
		this.statusOrder = statusOrder;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
}
