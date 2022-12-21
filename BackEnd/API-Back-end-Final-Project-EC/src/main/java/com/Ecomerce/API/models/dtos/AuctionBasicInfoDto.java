package com.Ecomerce.API.models.dtos;

public class AuctionBasicInfoDto {
	private String personOfferingPrice;
	private String accountNamePerson;
	private int offeredPrice;
	private String comment;
	private String timeOffer;
	
	
	public AuctionBasicInfoDto() {}

	public AuctionBasicInfoDto(String personOfferingPrice, int offeredPrice, String comment, String timeOffer) {
		super();
		this.personOfferingPrice = personOfferingPrice;
		this.offeredPrice = offeredPrice;
		this.comment = comment;
		this.timeOffer = timeOffer;
	}
	
	public String getPersonOfferingPrice() {
		return personOfferingPrice;
	}
	public void setPersonOfferingPrice(String personOfferingPrice) {
		this.personOfferingPrice = personOfferingPrice;
	}
	public int getOfferedPrice() {
		return offeredPrice;
	}
	public void setOfferedPrice(int offeredPrice) {
		this.offeredPrice = offeredPrice;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getTimeOffer() {
		return timeOffer;
	}
	public void setTimeOffer(String timeOffer) {
		this.timeOffer = timeOffer;
	}

	public String getAccountNamePerson() {
		return accountNamePerson;
	}

	public void setAccountNamePerson(String accountNamePerson) {
		this.accountNamePerson = accountNamePerson;
	}
}
