package com.Ecomerce.API.exceptions;

public class ResourceNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;
	private String status;
	private String message;
	private Object data;
	
	public ResourceNotFoundException() {}
	
	public ResourceNotFoundException(String status, String message, Object data) {
		super();
		this.status = status;
		this.message = message;
		this.data = data;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	
}
