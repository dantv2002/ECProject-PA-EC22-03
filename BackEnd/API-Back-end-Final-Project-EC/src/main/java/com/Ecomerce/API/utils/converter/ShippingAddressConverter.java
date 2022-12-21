package com.Ecomerce.API.utils.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.entities.AddressShipping;

@Service
public class ShippingAddressConverter {
	public AddressShippingDto convertToShippingAddressDto(AddressShipping entity) {
		if (entity == null) {
			return null;
		}
		AddressShippingDto shippingAddressDto = new AddressShippingDto();
		shippingAddressDto.setIdAddress(entity.getId());
		shippingAddressDto.setReceiver(entity.getFullName());
		shippingAddressDto.setIdDistrict(entity.getWard().getDistrict().getId());
		shippingAddressDto.setIdWard(entity.getWard().getId());
		shippingAddressDto.setAddressDetail(entity.getAddressDetails());
		shippingAddressDto.setPhoneNumber(entity.getPhone());
		
		return shippingAddressDto;
	}
	
	public List<AddressShippingDto> convertToListShippingAddressDto(List<AddressShipping> entities) {
		List<AddressShippingDto> listShippingAddressDto = new ArrayList<AddressShippingDto>();
		entities.forEach(entity -> listShippingAddressDto.add(convertToShippingAddressDto(entity)));
				
		return listShippingAddressDto;
	}
}
