package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.ShippingDistrictDto;

public interface ShippingService {

	List<ShippingDistrictDto> findAllShippingInfo();

	ShippingDistrictDto update(int addressStartId, int addressEndId, int fee);

}
