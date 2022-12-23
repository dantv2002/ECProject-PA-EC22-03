package com.Ecomerce.API.models.dtos;

public class DetailOrderOfUserDto {
	private String address;
	private int wardId;
	private String wardName;
	private int districtId;
	private String districtName;
	private String accountName;
	private String receiver;
	private String email;
	private String phone;
	
	public DetailOrderOfUserDto() {}

	public DetailOrderOfUserDto(String address, int wardId, String wardName, int districtId, String districtName,
			String accountName, String receiver, String email, String phone) {
		super();
		this.address = address;
		this.wardId = wardId;
		this.wardName = wardName;
		this.districtId = districtId;
		this.districtName = districtName;
		this.accountName = accountName;
		this.receiver = receiver;
		this.email = email;
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getWardId() {
		return wardId;
	}

	public void setWardId(int wardId) {
		this.wardId = wardId;
	}

	public String getWardName() {
		return wardName;
	}

	public void setWardName(String wardName) {
		this.wardName = wardName;
	}

	public int getDistrictId() {
		return districtId;
	}

	public void setDistrictId(int districtId) {
		this.districtId = districtId;
	}

	public String getDistrictName() {
		return districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
}
