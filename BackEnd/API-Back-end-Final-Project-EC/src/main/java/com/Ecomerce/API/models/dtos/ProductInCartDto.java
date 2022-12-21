package com.Ecomerce.API.models.dtos;

public class ProductInCartDto {
	private String productName;
	private String imageProduct;
	private String accountNameOfSeller;
	private String nameOfSeller;
	private int price;
	
	public ProductInCartDto() {}

	public ProductInCartDto(String productName, String imageProduct, String accountNameOfSeller, String nameOfSeller) {
		super();
		this.productName = productName;
		this.imageProduct = imageProduct;
		this.accountNameOfSeller = accountNameOfSeller;
		this.nameOfSeller = nameOfSeller;
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

	public String getAccountNameOfSeller() {
		return accountNameOfSeller;
	}

	public void setAccountNameOfSeller(String accountNameOfSeller) {
		this.accountNameOfSeller = accountNameOfSeller;
	}

	public String getNameOfSeller() {
		return nameOfSeller;
	}

	public void setNameOfSeller(String nameOfSeller) {
		this.nameOfSeller = nameOfSeller;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
}
