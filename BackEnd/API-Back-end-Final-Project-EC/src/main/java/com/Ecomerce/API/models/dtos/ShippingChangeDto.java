package com.Ecomerce.API.models.dtos;

public class ShippingChangeDto {
	private int addressStart;
	private int addressEnd;
	private int fee;

	public ShippingChangeDto() {
		super();
	}

	public ShippingChangeDto(int addressStart, int addressEnd, int fee) {
		super();
		this.addressStart = addressStart;
		this.addressEnd = addressEnd;
		this.fee = fee;
	}

	public int getFee() {
		return fee;
	}

	public void setFee(int fee) {
		this.fee = fee;
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

}
