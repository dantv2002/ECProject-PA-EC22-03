package com.Ecomerce.API.models.dtos;

public class CommentProductDetailDto {
	private String buyer;
	private String nameBuyer;
	private String comment;
	
	public CommentProductDetailDto() {}

	public CommentProductDetailDto(String buyer, String nameBuyer, String comment) {
		this.buyer = buyer;
		this.nameBuyer = nameBuyer;
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

	public String getNameBuyer() {
		return nameBuyer;
	}

	public void setNameBuyer(String nameBuyer) {
		this.nameBuyer = nameBuyer;
	}
}
