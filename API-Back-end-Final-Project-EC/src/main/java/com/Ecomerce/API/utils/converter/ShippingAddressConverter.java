package com.Ecomerce.API.utils.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.dtos.AddressShippingInsertDto;
import com.Ecomerce.API.models.dtos.DistrictDto;
import com.Ecomerce.API.models.dtos.WardDto;
import com.Ecomerce.API.models.entities.AddressShipping;
import com.Ecomerce.API.models.entities.District;
import com.Ecomerce.API.models.entities.Ward;
import com.Ecomerce.API.repositories.AddressShippingRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.repositories.WardRepository;

@Service
public class ShippingAddressConverter {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	WardRepository wardRepository;
	
	public AddressShippingDto convertToShippingAddressDto(AddressShipping entity) {
		if (entity == null) {
			return null;
		}
		AddressShippingDto shippingAddressDto = new AddressShippingDto();
		shippingAddressDto.setIdAddress(entity.getId());
		shippingAddressDto.setReceiver(entity.getFullName());
		shippingAddressDto.setIdDistrict(entity.getWard().getDistrict().getId());
		shippingAddressDto.setNameDistrict(entity.getWard().getDistrict().getName());
		shippingAddressDto.setIdWard(entity.getWard().getId());
		shippingAddressDto.setNameWard(entity.getWard().getName());
		shippingAddressDto.setAddressDetail(entity.getAddressDetails());
		shippingAddressDto.setPhoneNumber(entity.getPhone());
		
		return shippingAddressDto;
	}
	
	public List<AddressShippingDto> convertToListShippingAddressDto(List<AddressShipping> entities) {
		List<AddressShippingDto> listShippingAddressDto = new ArrayList<AddressShippingDto>();
		entities.forEach(entity -> listShippingAddressDto.add(convertToShippingAddressDto(entity)));
				
		return listShippingAddressDto;
	}
	
	public AddressShipping convertToEntity(AddressShippingInsertDto addressShipInsertDto) {
		AddressShipping addressShipping = new AddressShipping();
		addressShipping.setId(addressShipInsertDto.getId());
		addressShipping.setUser(userRepository.findById(addressShipInsertDto.getAcccountName()).orElse(null));
		addressShipping.setWard(wardRepository.findById(addressShipInsertDto.getWardId()).orElse(null));
		addressShipping.setPhone(addressShipInsertDto.getPhone());
		addressShipping.setFullName(addressShipInsertDto.getFullName());
		addressShipping.setAddressDetails(addressShipInsertDto.getAddressDetails());
		addressShipping.setStatus(addressShipInsertDto.isStatus());
		
		return addressShipping;
	}
	
	public AddressShippingInsertDto convertToShippingAddressInsertDto(AddressShipping entity) {
		if (entity == null) {
			return null;
		}
		AddressShippingInsertDto shippingAddressDto = new AddressShippingInsertDto();
		shippingAddressDto.setId(entity.getId());
		shippingAddressDto.setAcccountName(entity.getUser().getAccountName());
		shippingAddressDto.setWardId(entity.getWard().getId());
		shippingAddressDto.setPhone(entity.getPhone());
		shippingAddressDto.setFullName(entity.getFullName());
		shippingAddressDto.setAddressDetails(entity.getAddressDetails());
		shippingAddressDto.setStatus(entity.isStatus());
		
		return shippingAddressDto;
	}
	
	public DistrictDto convertToDistrictDto(District entity) {
		if (entity == null) {
			return null;
		}
		DistrictDto districtDto = new DistrictDto();
		districtDto.setId(entity.getId());
		districtDto.setName(entity.getName());
		districtDto.setCode(entity.getCode());
		
		return districtDto;
	}
	
	public List<DistrictDto> convertToListDistrictDto(List<District> entities) {
		List<DistrictDto> dtos = new ArrayList<DistrictDto>();
		entities.forEach(entity -> dtos.add(convertToDistrictDto(entity)));
		
		return dtos;
	}
	
	public WardDto convertToWardDto(Ward entity) {
		if (entity == null) {
			return null;
		}
		WardDto wardDto = new WardDto();
		wardDto.setId(entity.getId());
		wardDto.setName(entity.getName());
		wardDto.setCode(entity.getCode());
		wardDto.setDistrictId(entity.getDistrict().getId());
		
		return wardDto;
	}
	
	public List<WardDto> convertToListWardDto(List<Ward> entities) {
		List<WardDto> dtos = new ArrayList<WardDto>();
		entities.forEach(entity -> dtos.add(convertToWardDto(entity)));
		
		return dtos;
	}
}
