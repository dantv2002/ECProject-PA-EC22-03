package com.Ecomerce.API.models.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Shipping")
public class Shipping implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "address_start")
	private District addressStart;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "address_end")
	private District addressEnd;
	
	private int price;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public District getAddressStart() {
		return addressStart;
	}

	public void setAddressStart(District addressStart) {
		this.addressStart = addressStart;
	}

	public District getAddressEnd() {
		return addressEnd;
	}

	public void setAddressEnd(District addressEnd) {
		this.addressEnd = addressEnd;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
}
