package com.Ecomerce.API.models.dtos;

import java.sql.Time;

public class AuctionDto {
	private int id;
	private int waitingAuctionId;
	private Time timeStart;
	private Time timeEnd;
	private int priceTransaction;
	private int priceShipping;
	private int commission;
	private String sellerEnd;
	private String status;
	
	public AuctionDto() {}
	
	public AuctionDto(int id, int waitingAuctionId, Time timeStart, Time timeEnd,
			int priceTransaction, int priceShipping, int commission, String sellerEnd, String status) {
		this.id = id;
		this.waitingAuctionId = waitingAuctionId;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
		this.priceTransaction = priceTransaction;
		this.priceShipping = priceShipping;
		this.commission = commission;
		this.sellerEnd = sellerEnd;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getWaitingAuctionId() {
		return waitingAuctionId;
	}

	public void setWaitingAuctionId(int waitingAuctionId) {
		this.waitingAuctionId = waitingAuctionId;
	}

	public Time getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(Time timeStart) {
		this.timeStart = timeStart;
	}

	public Time getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(Time timeEnd) {
		this.timeEnd = timeEnd;
	}

	public int getPriceTransaction() {
		return priceTransaction;
	}

	public void setPriceTransaction(int priceTransaction) {
		this.priceTransaction = priceTransaction;
	}

	public int getPriceShipping() {
		return priceShipping;
	}

	public void setPriceShipping(int priceShipping) {
		this.priceShipping = priceShipping;
	}

	public int getCommission() {
		return commission;
	}

	public void setCommission(int commission) {
		this.commission = commission;
	}

	public String getSellerEnd() {
		return sellerEnd;
	}

	public void setSellerEnd(String sellerEnd) {
		this.sellerEnd = sellerEnd;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
