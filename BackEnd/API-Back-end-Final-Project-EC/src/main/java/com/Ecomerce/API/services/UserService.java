package com.Ecomerce.API.services;

import java.util.List;

import com.Ecomerce.API.models.dtos.UserDto;

public interface UserService {
	List<UserDto> findAll();
}
