package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table (name = "Users")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue (strategy = GenerationType.TABLE)
	@Column (name = "account_name")
	private String accountName;
	
	private String pass;
	
	@Column (name = "first_name")
	private String firstName;
	
	@Column (name = "last_name")
	private String lastName;
	
	@Column (name = "birthday")
	@Temporal (TemporalType.DATE)
	private Date birthDay;
	
	private String email;
	
	@Column (name = "status_user")
	private boolean statusUser;
	
	@OneToMany(mappedBy = "buyer", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<WaitingAuction> waitingAuctions;
	
	@OneToMany(mappedBy = "sellerEnd", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Auction> auctions;

	@OneToMany(mappedBy = "seller", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AuctionDetail> auctionDetails;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<UserDetail> userDetails;
	
	@OneToMany(mappedBy = "sender", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Chat> listChatSender;
	
	@OneToMany(mappedBy = "receiver", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Chat> listChatReceiver;
	
	// Getter and Setter method
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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(Date birthDay) {
		this.birthDay = birthDay;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isStatusUser() {
		return statusUser;
	}

	public void setStatusUser(boolean statusUser) {
		this.statusUser = statusUser;
	}

	public List<WaitingAuction> getWaitingAuctions() {
		return waitingAuctions;
	}

	public void setWaitingAuctions(List<WaitingAuction> waitingAuctions) {
		this.waitingAuctions = waitingAuctions;
	}

	public List<Auction> getAuctions() {
		return auctions;
	}

	public void setAuctions(List<Auction> auctions) {
		this.auctions = auctions;
	}

	public List<AuctionDetail> getAuctionDetails() {
		return auctionDetails;
	}

	public void setAuctionDetails(List<AuctionDetail> auctionDetails) {
		this.auctionDetails = auctionDetails;
	}

	public List<UserDetail> getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(List<UserDetail> userDetails) {
		this.userDetails = userDetails;
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
}
