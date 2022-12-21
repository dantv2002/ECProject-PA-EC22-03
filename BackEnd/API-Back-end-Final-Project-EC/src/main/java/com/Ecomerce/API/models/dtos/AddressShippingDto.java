package com.Ecomerce.API.models.dtos;

public class AddressShippingDto {
	private int idAddress;
	private String receiver;
	private int idDistrict;
	private int idWard;
	private String addressDetail;
	private String phoneNumber;
	
	public AddressShippingDto() {}

	public AddressShippingDto(int idAddress, String receiver, int idDistrict, int idWard, String addressDetail,
			String phoneNumber) {
		super();
		this.idAddress = idAddress;
		this.receiver = receiver;
		this.idDistrict = idDistrict;
		this.idWard = idWard;
		this.addressDetail = addressDetail;
		this.phoneNumber = phoneNumber;
	}

	public int getIdAddress() {
		return idAddress;
	}

	public void setIdAddress(int idAddress) {
		this.idAddress = idAddress;
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

	public int getIdDistrict() {
		return idDistrict;
	}

	public void setIdDistrict(int idDistrict) {
		this.idDistrict = idDistrict;
	}

	public int getIdWard() {
		return idWard;
	}

	public void setIdWard(int idWard) {
		this.idWard = idWard;
	}

	public String getAddressDetail() {
		return addressDetail;
	}

	public void setAddressDetail(String addressDetail) {
		this.addressDetail = addressDetail;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
