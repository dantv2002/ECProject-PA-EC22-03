package com.Ecomerce.API.models.dtos;

public class FilterProductDto {
	private String nameCategory; 
	private String nameManufacturer; 
	private String statusProduct;
	private boolean increase;
	private int maxPrice;
	private int minPrice; 
	private String keyValue;
	
	public FilterProductDto() {
		super();
	}
	
	public FilterProductDto(String nameCategory, String nameManufacturer, String statusProduct, boolean increase,
			int maxPrice, int minPrice, String keyValue) {
		super();
		this.nameCategory = nameCategory;
		this.nameManufacturer = nameManufacturer;
		this.statusProduct = statusProduct;
		this.increase = increase;
		this.maxPrice = maxPrice;
		this.minPrice = minPrice;
		this.keyValue = keyValue;
	}
	
	public String getNameCategory() {
		return nameCategory;
	}
	public void setNameCategory(String nameCategory) {
		this.nameCategory = nameCategory;
	}
	public String getNameManufacturer() {
		return nameManufacturer;
	}
	public void setNameManufacturer(String nameManufacturer) {
		this.nameManufacturer = nameManufacturer;
	}
	public String getStatusProduct() {
		return statusProduct;
	}
	public void setStatusProduct(String statusProduct) {
		this.statusProduct = statusProduct;
	}
	public boolean getIncrease() {
		return increase;
	}
	public void setIncrease(boolean isIncrease) {
		this.increase = isIncrease;
	}
	public int getMaxPrice() {
		return maxPrice;
	}
	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}
	public int getMinPrice() {
		return minPrice;
	}
	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}
	public String getKeyValue() {
		return keyValue;
	}
	public void setKeyValue(String keyValue) {
		this.keyValue = keyValue;
	}
}
