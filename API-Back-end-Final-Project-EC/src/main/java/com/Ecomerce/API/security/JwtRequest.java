package com.Ecomerce.API.security;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
	private String accountName;
	private String password;
	
	//need default constructor for JSON Parsing
	public JwtRequest()
	{
		
	}

	public JwtRequest(String username, String password) {
		this.setAccountName(username);
		this.setPassword(password);
	}

	public String getAccountName() {
		return this.accountName;
	}

	public void setAccountName(String username) {
		this.accountName = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
