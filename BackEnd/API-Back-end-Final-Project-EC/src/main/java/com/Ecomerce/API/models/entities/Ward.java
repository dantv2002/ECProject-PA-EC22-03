package com.Ecomerce.API.models.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name = "WARD")
public class Ward implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String code;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "district_id")
	private District district;
	
	@OneToMany(mappedBy = "ward", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<AddressShipping> addressShippings;
	
	@OneToMany(mappedBy = "ward", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<InforUser> inforUsers;

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

	public District getDistrict() {
		return district;
	}

	public void setDistrict(District district) {
		this.district = district;
	}

	public List<AddressShipping> getAddressShippings() {
		return addressShippings;
	}

	public void setAddressShippings(List<AddressShipping> addressShippings) {
		this.addressShippings = addressShippings;
	}

	public List<InforUser> getInforUsers() {
		return inforUsers;
	}

	public void setInforUsers(List<InforUser> inforUsers) {
		this.inforUsers = inforUsers;
	}
}
