package com.Ecomerce.API.models.dtos;

public class CommentProductDetailDto {
	private String buyer;
	private String comment;
	
	public CommentProductDetailDto() {}

	public CommentProductDetailDto(String buyer, String comment) {
		this.buyer = buyer;
		this.comment = comment;
	}

	public String getBuyer() {
		return buyer;
	}

	public void setBuyer(String buyer) {
		this.buyer = buyer;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}
