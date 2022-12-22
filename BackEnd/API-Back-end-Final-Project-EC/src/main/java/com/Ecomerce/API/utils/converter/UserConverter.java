package com.Ecomerce.API.utils.converter;

import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
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
}
