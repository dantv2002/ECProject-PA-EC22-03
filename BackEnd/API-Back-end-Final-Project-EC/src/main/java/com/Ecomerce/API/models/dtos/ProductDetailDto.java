package com.Ecomerce.API.models.dtos;

import java.util.List;

public class ProductDetailDto {
	
	private String name;
	private String imageProduct;
	private String description;
	private String seller;
	private String sellerName;
	private String manufacturer;
	private int categoryId;
	private String categoryName;
	private int amount;
	private List<CommentProductDetailDto> comments;
	
	
	public ProductDetailDto() {}

	public ProductDetailDto(String name, String imageProduct, String description, String seller, String manufacturer,
			int categoryId, String categoryName, int amount, List<CommentProductDetailDto> comments) {
		this.name = name;
		this.imageProduct = imageProduct;
		this.description = description;
		this.seller = seller;
		this.manufacturer = manufacturer;
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.amount = amount;
		this.comments = comments;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImageProduct() {
		return imageProduct;
	}

	public void setImageProduct(String imageProduct) {
		this.imageProduct = imageProduct;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public List<CommentProductDetailDto> getComments() {
		return comments;
	}

	public void setComments(List<CommentProductDetailDto> comments) {
		this.comments = comments;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}	
}
