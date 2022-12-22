package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.OrderAutionDto;

public interface OrderService {

	List<OrderAutionDto> findAllOrder();

}
