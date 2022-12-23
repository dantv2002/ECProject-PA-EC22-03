package com.Ecomerce.API.utils.converter;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.OrderAutionDto;
import com.Ecomerce.API.models.entities.Order;

@Service
public class OrderConverter {
	public Order convertToEntity (OrderAutionDto orderAutionDto) {
		if (orderAutionDto == null) {
			return null;
		}
		Order order = new Order();
		order.setId(orderAutionDto.getId());
		order.setAuction(orderAutionDto.getAuction());
		return order;
	}
	
	public OrderAutionDto convertToOrderAutionDto(Order order) {
		if(order == null)
			return null;
		OrderAutionDto orderAutionDto = new OrderAutionDto();
		orderAutionDto.setId(order.getId());
		orderAutionDto.setAuction(order.getAuction());
		return orderAutionDto;
	}
}
