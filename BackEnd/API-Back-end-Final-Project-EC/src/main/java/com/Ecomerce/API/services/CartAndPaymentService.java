package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.dtos.ProductInCartDto;

public interface CartAndPaymentService {
	public List<ProductInCartDto> getProductInCart(String accountName);
	public List<AddressShippingDto> getShippingAddress(String accountName);
}
