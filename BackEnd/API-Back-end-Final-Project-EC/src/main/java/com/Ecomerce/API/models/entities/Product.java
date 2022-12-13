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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name = "Product")
public class Product implements Serializable {	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String description;
	private String manufacturer;
	
	@Column (name = "image_product")
	private String imageProduct;
	
	@ManyToOne (fetch = FetchType.EAGER)
	@JoinColumn (name = "category_id")
	private Category category;
	
	@Column (name = "account_name")
	private String accountName;
	
	@OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<WaitingAuction> waitingAuctions;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getImageProduct() {
		return imageProduct;
	}

	public void setImageProduct(String imageProduct) {
		this.imageProduct = imageProduct;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public List<WaitingAuction> getWaitingAuctions() {
		return waitingAuctions;
	}

	public void setWaitingAuctions(List<WaitingAuction> waitingAuctions) {
		this.waitingAuctions = waitingAuctions;
	}
}
