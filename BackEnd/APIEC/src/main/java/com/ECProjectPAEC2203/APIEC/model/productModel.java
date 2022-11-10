package com.ECProjectPAEC2203.APIEC.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.ECProjectPAEC2203.APIEC.dto.productDto;

@Entity
@Table(name = "RA_Product")
public class productModel {
	@Id
	@Column(name = "Product_id")
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

	public productModel(String product_id, String product_name, String short_Desciption, String description_Details,
			String status, String color, String size, Double weight_product, String image_product, String category_id) {
		super();
		Product_id = product_id;
		Product_name = product_name;
		Short_Desciption = short_Desciption;
		Description_Details = description_Details;
		Status = status;
		Color = color;
		Size = size;
		Weight_product = weight_product;
		this.image_product = image_product;
		Category_id = category_id;
	}

	public productModel() {
		super();
	}

	public productModel(productModel model) {
		this.Product_id = model.Product_id;
		this.Product_name = model.Product_name;
		this.Short_Desciption = model.Short_Desciption;
		this.Description_Details = model.Description_Details;
		this.Status = model.Status;
		this.Color = model.Color;
		this.Size = model.Size;
		this.Weight_product = model.Weight_product;
		this.image_product = model.image_product;
		this.Category_id = model.Category_id;
	}

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
	
	public productDto toDTO() {
		productDto pDto = new productDto();
		pDto.setProduct_id(this.getProduct_id());
		pDto.setProduct_name(this.getProduct_name());
		pDto.setShort_Desciption(this.getShort_Desciption());
		pDto.setDescription_Details(this.getDescription_Details());
		pDto.setStatus(this.getStatus());
		pDto.setColor(this.getColor());
		pDto.setSize(this.getSize());
		pDto.setWeight_product(this.getWeight_product());
		pDto.setImage_product(this.getImage_product());
		pDto.setCategory_id(this.getCategory_id());
		return pDto;
		
	}
}
