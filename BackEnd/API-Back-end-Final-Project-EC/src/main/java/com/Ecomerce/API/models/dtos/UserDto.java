package com.Ecomerce.API.models.dtos;

import java.util.Date;

public class UserDto {
	
	private String accountName;
	private String pass;
	private String imageUser;
	private boolean statusUser;
	
	public UserDto () {}
	
	public UserDto (String accountName, String pass, String imageUser, boolean statusUser) {
		this.accountName = accountName;
		this.pass = pass;
		this.imageUser = imageUser;
		this.statusUser = statusUser;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getImageUser() {
		return imageUser;
	}

	public void setImageUser(String imageUser) {
		this.imageUser = imageUser;
	}

	public boolean isStatusUser() {
		return statusUser;
	}

	public void setStatusUser(boolean statusUser) {
		this.statusUser = statusUser;
	}
}
