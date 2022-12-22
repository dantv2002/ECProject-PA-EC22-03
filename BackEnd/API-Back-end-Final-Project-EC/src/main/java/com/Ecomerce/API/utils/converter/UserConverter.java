package com.Ecomerce.API.utils.converter;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.AuctionDto;
import com.Ecomerce.API.models.dtos.DetailOrderOfUserDto;
import com.Ecomerce.API.models.dtos.NotificationDto;
import com.Ecomerce.API.models.dtos.OrderOfUserDto;
import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
import com.Ecomerce.API.models.entities.Notification;
import com.Ecomerce.API.models.entities.Order;
import com.Ecomerce.API.models.entities.User;

@Service
public class UserConverter {

	public UserDto convertToDto(User user) {
		if (user == null) {
			return null;
		}
		
		UserDto userDto = new UserDto();
		userDto.setAccountName(user.getAccountName());
		userDto.setPass(user.getPass());
		userDto.setImageUser(user.getImageUser());
		userDto.setStatusUser(user.isStatusUser());
		userDto.setRole(user.getRole());
		
		return userDto;
	}

	public User convertToEntity(UserDto userDto) {
		User user = new User();
		
		user.setAccountName(userDto.getAccountName());
		user.setPass(userDto.getPass());
		user.setImageUser(userDto.getImageUser());
		user.setStatusUser(userDto.isStatusUser());
		user.setRole(userDto.getRole());
		
		return user;
	}
	
	public UserInfoDto convertToUserInfoDto(User user) {
		UserInfoDto userInfo = new UserInfoDto();
		userInfo.setAccountName(user.getAccountName());
		userInfo.setPass(user.getPass());
		userInfo.setImageUser(user.getImageUser());
		userInfo.setStatusUser(user.isStatusUser());
		userInfo.setRoles(user.getRole());
		
		if (user.getInforUser() == null) {
			return userInfo;
		}
		
		userInfo.setFirstName(user.getInforUser().getFirstName());
		userInfo.setLastName(user.getInforUser().getLastName());
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		userInfo.setBirthday(sdf.format(user.getInforUser().getBirthDay()));		
		userInfo.setEmail(user.getInforUser().getEmail());
		userInfo.setPhone(user.getInforUser().getPhone());
		userInfo.setWardId(user.getInforUser().getWard().getId());
		userInfo.setWardName(user.getInforUser().getWard().getName());
		userInfo.setDistrictId(user.getInforUser().getWard().getDistrict().getId());
		userInfo.setDistrictName(user.getInforUser().getWard().getDistrict().getName());
		userInfo.setAddressDetail(user.getInforUser().getAddressDetail());
		
		return userInfo;
	}
	
	public NotificationDto convertToNotificationDto(Notification entity) {
		if (entity == null) {
			return null;
		}
		
		NotificationDto dto = new NotificationDto();
		dto.setId(entity.getId());
		dto.setAccountName(entity.getUser().getAccountName());
		
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			dto.setTime(sdf.format(entity.getTime()));
			dto.setTimeStart(sdf.format(entity.getAuction().getTimeStart()));
			dto.setTimeEnd(sdf.format(entity.getAuction().getTimeEnd()));
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		dto.setStatus(entity.isStatus());	
		dto.setAuctionId(entity.getAuction().getId());
		dto.setBuyer(entity.getAuction().getBuyer().getAccountName());
		dto.setProductId(entity.getAuction().getProduct().getId());
		dto.setPriceTransaction(entity.getAuction().getPriceTransaction());
		dto.setPriceShipping(entity.getAuction().getPriceShipping());
		dto.setCommission(entity.getAuction().getCommission());
		dto.setSellerEnd(entity.getAuction().getSellerEnd().getAccountName());
		dto.setProductName(entity.getAuction().getProduct().getName());
		dto.setImageProduct(entity.getAuction().getProduct().getImageProduct());
		dto.setStatusAuction(entity.getAuction().getStatusAuction().getId());
		dto.setType(entity.isType());
		
		return dto;
	}
	
	public OrderOfUserDto convertToOrderOfUserDto(Order entity) {
		if (entity == null) {
			return null;
		}
		OrderOfUserDto dto = new OrderOfUserDto();
		
		dto.setOrderId(entity.getId());
		dto.setProductId(entity.getAuction().getProduct().getId());
		dto.setProductName(entity.getAuction().getProduct().getName());
		dto.setImageProduct(entity.getAuction().getProduct().getImageProduct());
		dto.setBuyerAccount(entity.getAuction().getBuyer().getAccountName());
		dto.setBuyerName(entity.getAuction().getBuyer().getInforUser().getFirstName() + " " + 
				entity.getAuction().getBuyer().getInforUser().getLastName());
		dto.setSellerAccount(entity.getAuction().getSellerEnd().getAccountName());
		dto.setSellerName(entity.getAuction().getSellerEnd().getInforUser().getFirstName() + " " + 
				entity.getAuction().getSellerEnd().getInforUser().getLastName());
		dto.setStatusOrder(entity.getStatus().getId());
		
		return dto;
	}
	
	public DetailOrderOfUserDto convertToDetailOrderOfUserDto(Order entity) {
		if (entity == null) {
			return null;
		}
		DetailOrderOfUserDto dto = new DetailOrderOfUserDto();
		
		dto.setAddress(entity.getAuction().getBuyer().getInforUser().getAddressDetail());
		dto.setWardId(entity.getAuction().getBuyer().getInforUser().getWard().getId());
		dto.setWardName(entity.getAuction().getBuyer().getInforUser().getWard().getName());
		dto.setDistrictId(entity.getAuction().getBuyer().getInforUser().getWard().getDistrict().getId());
		dto.setDistrictName(entity.getAuction().getBuyer().getInforUser().getWard().getDistrict().getName());
		dto.setAccountName(entity.getAuction().getBuyer().getInforUser().getAccountName());
		dto.setReceiver(entity.getAuction().getBuyer().getInforUser().getFirstName() + " " + 
				entity.getAuction().getBuyer().getInforUser().getLastName());
		dto.setEmail(entity.getAuction().getBuyer().getInforUser().getEmail());
		dto.setPhone(entity.getAuction().getBuyer().getInforUser().getPhone());
		
		return dto;
	}
}
