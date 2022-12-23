package com.Ecomerce.API.models.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Tariff implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "price_start")
	private int priceStart;
	
	@Column(name = "price_end")
	private int priceEnd;
	
	@Column(name = "price_commission")
	private double priceCommission;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPriceStart() {
		return priceStart;
	}

	public void setPriceStart(int priceStart) {
		this.priceStart = priceStart;
	}

	public int getPriceEnd() {
		return priceEnd;
	}

	public void setPriceEnd(int priceEnd) {
		this.priceEnd = priceEnd;
	}

	public double getPriceCommission() {
		return priceCommission;
	}

	public void setPriceCommission(double priceCommission) {
		this.priceCommission = priceCommission;
	}
}
