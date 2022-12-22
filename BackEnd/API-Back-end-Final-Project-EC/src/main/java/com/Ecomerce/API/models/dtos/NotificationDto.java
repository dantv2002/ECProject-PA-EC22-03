package com.Ecomerce.API.models.dtos;

import java.security.Timestamp;

public class NotificationDto {
	private int id;
	private String accountName;
	private int idProduct;
	private Timestamp time;
	private int auctionId;
	private boolean status;
	private String productName;
	private String imageProduct;
	private AuctionDto auctionDto;
}
