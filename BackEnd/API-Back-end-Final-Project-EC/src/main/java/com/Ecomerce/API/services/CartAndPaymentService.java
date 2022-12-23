package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.DataPaymentDto;
import com.Ecomerce.API.models.dtos.ProductInCartDto;
import com.Ecomerce.API.models.entities.Order;

public interface CartAndPaymentService {
	public List<ProductInCartDto> getProductInCart(String accountName);
	List<DataPaymentDto> priceShipping(List<Integer> auctionId);
	double convertFromVNDtoDollar(double VND);
	boolean saveOrder(List<Integer> auctionId);
}
