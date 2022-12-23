package com.Ecomerce.API.models.dtos;

public class RevenueStactisticsDto {
	private int month;
	private int year;
	private long revenue;
	public RevenueStactisticsDto(int month, int year, long revenue) {
		super();
		this.month = month;
		this.year = year;
		this.revenue = revenue;
	}
	public RevenueStactisticsDto() {
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
	public long getRevenue() {
		return revenue;
	}
	public void setRevenue(long revenue) {
		this.revenue = revenue;
	}
	
}
