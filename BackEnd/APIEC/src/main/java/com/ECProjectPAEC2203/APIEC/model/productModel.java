package com.ECProjectPAEC2203.APIEC.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RA_Product")
public class productModel {
	@Id
	@Column(name="Product_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String Product_id;
	
	private String Product_name;
	
	private String Short_Desciption;
	
	private String Description_Details;
	
	private String Status;
	
	private String Color;
	
	private String Size;
	
	private Double Weight_product;
	
	private String image_product;
	
	private String Category_id;
	
	public String getProduct_id() {
		return Product_id;
	}
	public void setProduct_id(String product_id) {
		Product_id = product_id;
	}
	public String getProduct_name() {
		return Product_name;
	}
	public void setProduct_name(String product_name) {
		Product_name = product_name;
	}
	public String getShort_Desciption() {
		return Short_Desciption;
	}
	public void setShort_Desciption(String short_Desciption) {
		Short_Desciption = short_Desciption;
	}
	public String getDescription_Details() {
		return Description_Details;
	}
	public void setDescription_Details(String description_Details) {
		Description_Details = description_Details;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getColor() {
		return Color;
	}
	public void setColor(String color) {
		Color = color;
	}
	public String getSize() {
		return Size;
	}
	public void setSize(String size) {
		Size = size;
	}
	public Double getWeight_product() {
		return Weight_product;
	}
	public void setWeight_product(Double weight_product) {
		Weight_product = weight_product;
	}
	public String getImage_product() {
		return image_product;
	}
	public void setImage_product(String image_product) {
		this.image_product = image_product;
	}
	public String getCategory_id() {
		return Category_id;
	}
	public void setCategory_id(String category_id) {
		Category_id = category_id;
	}
}
