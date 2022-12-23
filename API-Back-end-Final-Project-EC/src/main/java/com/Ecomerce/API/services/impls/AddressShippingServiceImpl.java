package com.Ecomerce.API.services.impls;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AddressShippingDto;
import com.Ecomerce.API.models.dtos.AddressShippingInsertDto;
import com.Ecomerce.API.models.dtos.DistrictDto;
import com.Ecomerce.API.models.dtos.WardDto;
import com.Ecomerce.API.models.entities.AddressShipping;
import com.Ecomerce.API.models.entities.District;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.AddressShippingRepository;
import com.Ecomerce.API.repositories.DistrictRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.repositories.WardRepository;
import com.Ecomerce.API.services.AddressShippingService;
import com.Ecomerce.API.utils.converter.ShippingAddressConverter;

@Service
public class AddressShippingServiceImpl implements AddressShippingService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired 
	AddressShippingRepository addressShippingRepository;
	
	@Autowired
	DistrictRepository districtRepository;
	
	@Autowired
	WardRepository wardRepository;
	
	@Autowired
	ShippingAddressConverter converter;
	
	@Override
	public List<AddressShippingDto> getShippingAddress(String accountName) {
		User user = userRepository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		List<AddressShipping> shippingAddressList = addressShippingRepository.findByUserAndStatus(user, true);
		
		return converter.convertToListShippingAddressDto(shippingAddressList);
	}

	@Override
	public boolean insert(AddressShippingInsertDto addressShippingDto) {
		AddressShipping addressShipping = converter.convertToEntity(addressShippingDto);
		try {
			addressShippingRepository.save(addressShipping);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public AddressShippingInsertDto delete(int id) {
		AddressShipping addressShipping = addressShippingRepository.findById(id).orElse(null);
		if (addressShipping == null) {
			return null;
		}
		try {
			addressShipping.setStatus(false);
			addressShippingRepository.save(addressShipping);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

		return converter.convertToShippingAddressInsertDto(addressShipping);
	}

	@Override
	public List<DistrictDto> findAllDistrict() {
		List<District> districts = (List<District>)districtRepository.findAll();
		List<DistrictDto> dtos = converter.convertToListDistrictDto(districts);
		return dtos;
	}

	@Override
	public List<WardDto> findWardByDistrict(int districtId) {
		District district = districtRepository.findById(districtId).orElse(null);
		if (district == null) {
			return null;
		}
		
		List<WardDto> wardsDto = converter.convertToListWardDto(district.getWards());
		return wardsDto;
	}

	@Override
	public AddressShippingInsertDto update(int id, AddressShippingInsertDto addressShippingDto) {
		AddressShipping addressShipping = addressShippingRepository.findById(id).orElse(null);
		
		addressShipping.setUser(userRepository.findById(addressShippingDto.getAcccountName()).orElse(null));
		addressShipping.setWard(wardRepository.findById(addressShippingDto.getWardId()).orElse(null));
		addressShipping.setPhone(addressShippingDto.getPhone());
		addressShipping.setFullName(addressShippingDto.getFullName());
		addressShipping.setAddressDetails(addressShippingDto.getAddressDetails());
		addressShipping.setStatus(addressShippingDto.isStatus());
		try {
			addressShippingRepository.save(addressShipping);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return addressShippingDto;
	}
}
