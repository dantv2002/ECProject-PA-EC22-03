package com.Ecomerce.API.models.dtos;

public class WardDto {
	private int id;
	private String name;
	private String code;
	private int districtId;
	
	public WardDto() {}

	public WardDto(int id, String name, String code, int districtId) {
		this.id = id;
		this.name = name;
		this.code = code;
		this.districtId = districtId;
	}

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

	public int getDistrictId() {
		return districtId;
	}

	public void setDistrictId(int districtId) {
		this.districtId = districtId;
	}
}
