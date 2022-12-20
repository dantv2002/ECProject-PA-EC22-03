package com.Ecomerce.API.services;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;

public interface UserService {
	UserDto convertToDto(User user);
	User convertToEntity(UserDto userDto);
	UserDto findUserByName(String name);
	UserDto save(UserDto user);
	boolean isUserSellingThisProduct(String userName, int productId);
}
