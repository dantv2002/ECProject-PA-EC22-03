package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.sql.Time;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Auction")
public class Auction implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "waiting_auction_id")
	private WaitingAuction waitingAuction;
	
	@Column(name = "time_start")
	private Time timeStart;
	
	@Column(name = "time_end")
	private Time timeEnd;
	
	@Column(name = "price_transaction")
	private int priceTransaction;
	
	@Column(name = "price_shipping")
	private int priceShipping;
	
	private int commission;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "seller_end")
	private User sellerEnd;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AuctionDetail> auctionDetails;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<OrderStatus> listOrderStatus;
	
	private String status;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public WaitingAuction getWaitingAuction() {
		return waitingAuction;
	}

	public void setWaitingAuction(WaitingAuction waitingAuction) {
		this.waitingAuction = waitingAuction;
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

	public User getSellerEnd() {
		return sellerEnd;
	}

	public void setSellerEnd(User sellerEnd) {
		this.sellerEnd = sellerEnd;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<AuctionDetail> getAuctionDetails() {
		return auctionDetails;
	}

	public void setAuctionDetails(List<AuctionDetail> auctionDetails) {
		this.auctionDetails = auctionDetails;
	}

	public List<OrderStatus> getListOrderStatus() {
		return listOrderStatus;
	}

	public void setListOrderStatus(List<OrderStatus> listOrderStatus) {
		this.listOrderStatus = listOrderStatus;
	}
}
