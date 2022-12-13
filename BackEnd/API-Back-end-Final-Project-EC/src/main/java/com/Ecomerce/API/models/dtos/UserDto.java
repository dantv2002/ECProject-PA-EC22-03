package com.Ecomerce.API.models.dtos;

import java.util.Date;

public class UserDto {
	
	private String accountName;
	private String pass;
	private String firstName;
	private String lastName;
	private Date birthDay;
	private String email;
	private boolean statusUser;
	
	public UserDto () {}
	
	public UserDto (String accountName, String pass, String firstName, String lastName, 
			Date birthDay, String email, boolean statusUser) {
		this.accountName = accountName;
		this.pass = pass;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = birthDay;
		this.email = email;
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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(Date birthDay) {
		this.birthDay = birthDay;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isStatusUser() {
		return statusUser;
	}

	public void setStatusUser(boolean statusUser) {
		this.statusUser = statusUser;
	}
}
