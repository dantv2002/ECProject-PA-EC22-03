package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Statusss")
public class Status implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String status;
	
	@OneToMany(mappedBy = "status", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	List<OrderStatus> listOrderStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<OrderStatus> getListOrderStatus() {
		return listOrderStatus;
	}

	public void setListOrderStatus(List<OrderStatus> listOrderStatus) {
		this.listOrderStatus = listOrderStatus;
	}
}
