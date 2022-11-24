package com.ECProject.API.dto;

public class productDTO {
	
	private int ID;	
	private String name;
	private String description;
	private String manufacturer;	
	private String imageProduct;
	private int categoryID;	
	private String accountName;
	
	public productDTO() {
		this.ID = 0;
		this.name = "";
		this.description = "";
		this.manufacturer = "";
		this.imageProduct = "";
		this.categoryID = 0;
		this.accountName = "";
	}
	
	public productDTO(int ID, String name, String description, String manufacturer, 
			String imageProduct, int categoryID, String accountName) {
		this.ID = ID;
		this.name = name;
		this.description = description;
		this.manufacturer = manufacturer;
		this.imageProduct = imageProduct;
		this.categoryID = categoryID;
		this.accountName = accountName;
	}
	
	public productDTO(productDTO ProductDTO) {
		this.ID = ProductDTO.ID;
		this.name = ProductDTO.name;
		this.description = ProductDTO.description;
		this.manufacturer = ProductDTO.manufacturer;
		this.imageProduct = ProductDTO.imageProduct;
		this.categoryID = ProductDTO.categoryID;
		this.accountName = ProductDTO.accountName;
	}

	// Getter and Setter method
	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
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

	public int getCategoryID() {
		return categoryID;
	}

	public void setCategoryID(int categoryID) {
		this.categoryID = categoryID;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}	
}
