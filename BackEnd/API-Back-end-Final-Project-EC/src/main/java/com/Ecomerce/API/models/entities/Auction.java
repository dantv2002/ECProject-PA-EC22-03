package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Auction")
public class Auction implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "buyer")
	private User buyer;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_product")
	private Product product;
	
	@Column(name = "time_start")
	private Timestamp timeStart;
	
	@Column(name = "time_end")
	private Timestamp timeEnd;
	
	@Column(name = "price_transaction")
	private int priceTransaction;
	
	@Column(name = "price_shipping")
	private int priceShipping;
	
	private int commission;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "seller_end")
	private User sellerEnd;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "status")
	private StatusAuction statusAuction;
	
	private boolean exist;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Notification> notifications;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Order> orders;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Comment> comments;
	
	@OneToMany(mappedBy = "auction", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AuctionDetail> auctionDetails;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Timestamp getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(Timestamp timeStart) {
		this.timeStart = timeStart;
	}

	public Timestamp getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(Timestamp timeEnd) {
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

	public StatusAuction getStatusAuction() {
		return statusAuction;
	}

	public void setStatusAuction(StatusAuction statusAuction) {
		this.statusAuction = statusAuction;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<AuctionDetail> getAuctionDetails() {
		return auctionDetails;
	}

	public void setAuctionDetails(List<AuctionDetail> auctionDetails) {
		this.auctionDetails = auctionDetails;
	}

	public boolean isExist() {
		return exist;
	}

	public void setExist(boolean exist) {
		this.exist = exist;
	}
}
