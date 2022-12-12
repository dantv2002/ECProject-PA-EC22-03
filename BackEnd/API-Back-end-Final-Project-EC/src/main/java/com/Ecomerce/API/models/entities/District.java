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
@Table(name = "DISTRICT")
public class District implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String code;
	
	@OneToMany(mappedBy = "addressStart", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Shipping> listAddressStart;
	
	@OneToMany(mappedBy = "addressEnd", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Shipping> listAddressEnd;
	
	@OneToMany(mappedBy = "district", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Ward> wards;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public List<Shipping> getListAddressStart() {
		return listAddressStart;
	}
	public void setListAddressStart(List<Shipping> listAddressStart) {
		this.listAddressStart = listAddressStart;
	}
	public List<Shipping> getListAddressEnd() {
		return listAddressEnd;
	}
	public void setListAddressEnd(List<Shipping> listAddressEnd) {
		this.listAddressEnd = listAddressEnd;
	}
	public List<Ward> getWards() {
		return wards;
	}
	public void setWards(List<Ward> wards) {
		this.wards = wards;
	}
}
