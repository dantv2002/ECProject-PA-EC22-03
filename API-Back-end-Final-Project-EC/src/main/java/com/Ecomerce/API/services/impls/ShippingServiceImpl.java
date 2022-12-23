package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.ShippingDistrictDto;
import com.Ecomerce.API.models.entities.District;
import com.Ecomerce.API.models.entities.Shipping;
import com.Ecomerce.API.repositories.DistrictRepository;
import com.Ecomerce.API.repositories.ShippingRepository;
import com.Ecomerce.API.services.ShippingService;
import com.Ecomerce.API.utils.converter.ShippingConverter;

@Service
public class ShippingServiceImpl implements ShippingService {

	@Autowired
	ShippingConverter converter;
	@Autowired
	ShippingRepository repository;
	@Autowired
	DistrictRepository districtRepository;
	@Override
	public List<ShippingDistrictDto> findAllShippingInfo() {
		List<Shipping> shippings = repository.findAll();
		List<ShippingDistrictDto> listShippingDistrictDtos = new ArrayList<>();
		for(Shipping shipping: shippings) {
			listShippingDistrictDtos.add(converter.toShippingDistrictDto(shipping));
		}
		return listShippingDistrictDtos;
	}
	@Override
	public ShippingDistrictDto update(int addressStartId, int addressEndId, int fee) {
		District addressStart = districtRepository.findById(addressStartId).orElse(null);
		District addressEnd = districtRepository.findById(addressEndId).orElse(null);
		Shipping shipping = repository.findByAddressStartAndAddressEnd(addressStart, addressEnd);
		shipping.setPrice(fee);
		repository.save(shipping);
		return converter.toShippingDistrictDto(shipping);
	}

}
