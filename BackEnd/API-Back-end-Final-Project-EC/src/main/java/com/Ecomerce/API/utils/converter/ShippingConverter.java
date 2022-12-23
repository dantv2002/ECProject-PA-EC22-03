package com.Ecomerce.API.utils.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.ShippingDistrictDto;
import com.Ecomerce.API.models.entities.Shipping;
import com.Ecomerce.API.repositories.DistrictRepository;
import com.Ecomerce.API.repositories.ShippingRepository;

@Service
public class ShippingConverter {
	@Autowired
	ShippingRepository repository;
	@Autowired
	DistrictRepository districtRepository;
	
	public ShippingDistrictDto toShippingDistrictDto(Shipping shippingEntity) {
		if (shippingEntity == null) {
			return null;
		}
		ShippingDistrictDto shippingDistrictDto = new ShippingDistrictDto();
		shippingDistrictDto.setId(shippingEntity.getId());
		shippingDistrictDto.setAddressStart(shippingEntity.getAddressStart().getId());
		shippingDistrictDto.setAddressEnd(shippingEntity.getAddressEnd().getId());
		shippingDistrictDto.setPrice(shippingEntity.getPrice());
		shippingDistrictDto.setAddressStartName(shippingEntity.getAddressStart().getName());
		shippingDistrictDto.setAddressEndName(shippingEntity.getAddressEnd().getName());
		return shippingDistrictDto;
	}
	
	public Shipping toShippingEntity(ShippingDistrictDto shippingDistrictDto) {
		if (shippingDistrictDto == null) {
			return null;
		}
		Shipping shipping = new Shipping();
		shipping.setId(shippingDistrictDto.getId());
		shipping.setAddressStart(districtRepository.findById(shippingDistrictDto.getAddressStart()).orElse(null));
		shipping.setAddressEnd(districtRepository.findById(shippingDistrictDto.getAddressStart()).orElse(null));
		shipping.setPrice(shippingDistrictDto.getPrice());
		return shipping;
	}
}
