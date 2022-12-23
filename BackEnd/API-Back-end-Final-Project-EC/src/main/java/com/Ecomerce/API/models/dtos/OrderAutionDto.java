package com.Ecomerce.API.models.dtos;

import com.Ecomerce.API.models.entities.Auction;
import com.Ecomerce.API.models.entities.StatusOrder;

public class OrderAutionDto {

	private int id;
	private Auction auction;
	public OrderAutionDto(int id, Auction auction, StatusOrder status) {
		super();
		this.id = id;
		this.auction = auction;
	}
	public OrderAutionDto() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Auction getAuction() {
		return auction;
	}
	public void setAuction(Auction auction) {
		this.auction = auction;
	}
	
}
