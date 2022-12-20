package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name = "Users")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column (name = "account_name")
	private String accountName;
	
	private String pass;
	
	@Column(name = "image_user")
	private String imageUser;
	
	@Column(name = "status_user")
	private boolean statusUser;
	
	@Column(name = "roles")
	private String role;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Product> products;
	
	@OneToMany(mappedBy = "buyer", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Auction> auctionsBuyer;
	
	@OneToMany(mappedBy = "sellerEnd", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Auction> auctionsSellerEnd;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Notification> notifications;
	
	@OneToMany(mappedBy = "sender", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Chat> listChatSender;
	
	@OneToMany(mappedBy = "receiver", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Chat> listChatReceiver;
	
	@OneToMany(mappedBy = "seller", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AuctionDetail> auctionDetails;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AddressShipping> addressShippings;
	
	@OneToOne(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private InforUser inforUser;

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getImageUser() {
		return imageUser;
	}

	public void setImageUser(String imageUser) {
		this.imageUser = imageUser;
	}

	public boolean isStatusUser() {
		return statusUser;
	}

	public void setStatusUser(boolean statusUser) {
		this.statusUser = statusUser;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public List<Auction> getAuctionsBuyer() {
		return auctionsBuyer;
	}

	public void setAuctionsBuyer(List<Auction> auctionsBuyer) {
		this.auctionsBuyer = auctionsBuyer;
	}

	public List<Auction> getAuctionsSellerEnd() {
		return auctionsSellerEnd;
	}

	public void setAuctionsSellerEnd(List<Auction> auctionsSellerEnd) {
		this.auctionsSellerEnd = auctionsSellerEnd;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

	public List<Chat> getListChatSender() {
		return listChatSender;
	}

	public void setListChatSender(List<Chat> listChatSender) {
		this.listChatSender = listChatSender;
	}

	public List<Chat> getListChatReceiver() {
		return listChatReceiver;
	}

	public void setListChatReceiver(List<Chat> listChatReceiver) {
		this.listChatReceiver = listChatReceiver;
	}

	public List<AuctionDetail> getAuctionDetails() {
		return auctionDetails;
	}

	public void setAuctionDetails(List<AuctionDetail> auctionDetails) {
		this.auctionDetails = auctionDetails;
	}

	public List<AddressShipping> getAddressShippings() {
		return addressShippings;
	}

	public void setAddressShippings(List<AddressShipping> addressShippings) {
		this.addressShippings = addressShippings;
	}

	public InforUser getInforUser() {
		return inforUser;
	}

	public void setInforUser(InforUser inforUser) {
		this.inforUser = inforUser;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
