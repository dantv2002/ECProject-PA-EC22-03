package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.OrderAutionDto;
import com.Ecomerce.API.models.entities.Order;
import com.Ecomerce.API.repositories.OrderRepository;
import com.Ecomerce.API.services.OrderService;
import com.Ecomerce.API.utils.converter.OrderConverter;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository repository;
	@Autowired
	OrderConverter converter;
	
	@Override
	public List<OrderAutionDto> findAllOrder() {
		List<Order> orders = repository.findAll();
		List<OrderAutionDto> listOrderAutionDtos = new ArrayList<>();
		for(Order order : orders) {
			listOrderAutionDtos.add(converter.convertToOrderAutionDto(order));
		}
		return listOrderAutionDtos;
	}

}
