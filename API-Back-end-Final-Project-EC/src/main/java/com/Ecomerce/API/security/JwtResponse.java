
package com.Ecomerce.API.security;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String token;
	private String type;
	
	//need default constructor for JSON Parsing
	public JwtResponse()
	{
		
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public JwtResponse(String token, String type) {
		super();
		this.token = token;
		this.type = type;
	}

	
}