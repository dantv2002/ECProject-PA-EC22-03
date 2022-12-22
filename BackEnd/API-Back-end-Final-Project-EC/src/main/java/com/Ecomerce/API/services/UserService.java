package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;

public interface UserService {
	UserDto findUserByName(String name);
	boolean isUserSellingThisProduct(String userName, int productId);
	UserDto findInfoCurrentUser(String accountName);
	UserDto update(String accountName, UserDto userDto);
}
