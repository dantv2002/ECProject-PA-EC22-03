package com.Ecomerce.API.models.dtos;

public class OrderStactisticsDto {
	private int month;
	private int year;
	private int count;
	public OrderStactisticsDto(int month, int year, int count) {
		super();
		this.month = month;
		this.year = year;
		this.count = count;
	}
	public OrderStactisticsDto() {
		super();
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
}
