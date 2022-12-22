package com.Ecomerce.API.models.dtos;

public class ShippingDistrictDto {
	private int id;
	private int addressStart;
	private int addressEnd;
	private int price;
	private String addressStartName;
	private String addressEndName;

	public ShippingDistrictDto() {
		super();
	}

	public ShippingDistrictDto(int id, int addressStart, int addressEnd, int price, String addressStartName,
			String addressEndName) {
		super();
		this.id = id;
		this.addressStart = addressStart;
		this.addressEnd = addressEnd;
		this.price = price;
		this.addressStartName = addressStartName;
		this.addressEndName = addressEndName;
	}

	public String getAddressStartName() {
		return addressStartName;
	}

	public void setAddressStartName(String addressStartName) {
		this.addressStartName = addressStartName;
	}

	public String getAddressEndName() {
		return addressEndName;
	}

	public void setAddressEndName(String addressEndName) {
		this.addressEndName = addressEndName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAddressStart() {
		return addressStart;
	}

	public void setAddressStart(int addressStart) {
		this.addressStart = addressStart;
	}

	public int getAddressEnd() {
		return addressEnd;
	}

	public void setAddressEnd(int addressEnd) {
		this.addressEnd = addressEnd;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
