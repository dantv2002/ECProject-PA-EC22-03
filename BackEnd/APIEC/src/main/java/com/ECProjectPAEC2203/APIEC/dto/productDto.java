package com.ECProjectPAEC2203.APIEC.dto;

import com.ECProjectPAEC2203.APIEC.model.productModel;

public class productDto {
	
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

	public productDto(String product_id, String product_name, String short_Desciption, String description_Details,
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

	public productDto(productDto pDto) {
		super();
		this.Product_id = pDto.Product_id;
		this.Product_name = pDto.Product_name;
		this.Short_Desciption = pDto.Short_Desciption;
		this.Description_Details = pDto.Description_Details;
		this.Status = pDto.Status;
		this.Color = pDto.Color;
		this.Size = pDto.Size;
		this.Weight_product = pDto.Weight_product;
		this.image_product = pDto.image_product;
		this.Category_id = pDto.Category_id;
	}
	
	public productDto() {
		super();
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

	public productModel toModel() {
		productModel pProduct = new productModel();
		pProduct.setProduct_id(this.getProduct_id());
		pProduct.setProduct_name(this.getProduct_name());
		pProduct.setShort_Desciption(this.getShort_Desciption());
		pProduct.setDescription_Details(this.getDescription_Details());
		pProduct.setStatus(this.getStatus());
		pProduct.setColor(this.getColor());
		pProduct.setSize(this.getSize());
		pProduct.setWeight_product(this.getWeight_product());
		pProduct.setImage_product(this.getImage_product());
		pProduct.setCategory_id(this.getCategory_id());
		return pProduct;
	}
	
}
