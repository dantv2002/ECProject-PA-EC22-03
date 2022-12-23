package com.Ecomerce.API.models.dtos;

public class AddressShippingInsertDto {
	private int id;
	private String acccountName;
	private int wardId;
	private String phone;
	private String fullName;
	private String addressDetails;
	private boolean status;
	
	public AddressShippingInsertDto() {}

	public AddressShippingInsertDto(int id, String acccountName, int wardId, String phone, String fullName,
			String addressDetails, boolean status) {
		super();
		this.id = id;
		this.acccountName = acccountName;
		this.wardId = wardId;
		this.phone = phone;
		this.fullName = fullName;
		this.addressDetails = addressDetails;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAcccountName() {
		return acccountName;
	}

	public void setAcccountName(String acccountName) {
		this.acccountName = acccountName;
	}

	public int getWardId() {
		return wardId;
	}

	public void setWardId(int wardId) {
		this.wardId = wardId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getAddressDetails() {
		return addressDetails;
	}

	public void setAddressDetails(String addressDetails) {
		this.addressDetails = addressDetails;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
