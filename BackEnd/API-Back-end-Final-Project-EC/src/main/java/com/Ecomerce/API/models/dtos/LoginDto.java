package com.Ecomerce.API.models.dtos;

public class LoginDto {
	private String accountName;
	private String passWord;
	
	public LoginDto() {
		super();
	}
	public LoginDto(String accountName, String passWord) {
		super();
		this.accountName = accountName;
		this.passWord = passWord;
	}
	public String getAccountName() {
		return accountName;
	}
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
}
