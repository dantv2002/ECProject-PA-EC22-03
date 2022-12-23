package com.Ecomerce.API.models.dtos;

public class ChangeStatusUserDto {
	private String accountName;
	private boolean status;
	public ChangeStatusUserDto(String accountName, boolean status) {
		super();
		this.accountName = accountName;
		this.status = status;
	}
	public ChangeStatusUserDto() {
		super();
	}
	public String getAccountName() {
		return accountName;
	}
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
