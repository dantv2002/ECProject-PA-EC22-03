package com.Ecomerce.API.utils.converter;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
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
		userInfo.setAddressDetail(user.getInforUser().getAddressDetail());
		
		return userInfo;
	}
	

}
