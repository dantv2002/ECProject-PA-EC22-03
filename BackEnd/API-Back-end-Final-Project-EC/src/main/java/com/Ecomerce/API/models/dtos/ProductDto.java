package com.Ecomerce.API.models.dtos;

public class ProductDto {
	private int id;	
	private String name;
	private String description;
	private String manufacturer;	
	private String imageProduct;
	private int categoryId;	
	private String accountName;
	
	public ProductDto() {
		this.id = 0;
		this.name = "";
		this.description = "";
		this.manufacturer = "";
		this.imageProduct = "";
		this.categoryId = 0;
		this.accountName = "";
	}
	
	public ProductDto(int id, String name, String description, String manufacturer, 
			String imageProduct, int categoryId, String accountName) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.manufacturer = manufacturer;
		this.imageProduct = imageProduct;
		this.categoryId = categoryId;
		this.accountName = accountName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getImageProduct() {
		return imageProduct;
	}

	public void setImageProduct(String imageProduct) {
		this.imageProduct = imageProduct;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}	
}
