package com.Ecomerce.API.services.impls;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repository;
	
	@Override
	public List<UserDto> findAll() {
		List<User> users = repository.findAll();
		List<UserDto> usersDto = new ArrayList<UserDto>();
		users.forEach(user -> usersDto.add(convertToDto(user)));
		
		return usersDto;
	}
	
	private UserDto convertToDto(User user) {
		if (user == null) {
			return null;
		}
		
		UserDto userDto = new UserDto();
		userDto.setAccountName(user.getAccountName());
		userDto.setPass(user.getPass());
		userDto.setFirstName(user.getFirstName());
		userDto.setLastName(user.getLastName());
		userDto.setBirthDay(user.getBirthDay());
		userDto.setEmail(user.getEmail());
		userDto.setStatusUser(user.isStatusUser());
		
		return userDto;
	}
	
	private User convertToEntity(UserDto userDto) {
		User user = new User();
		
		user.setAccountName(userDto.getAccountName());
		user.setPass(userDto.getPass());
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setBirthDay(userDto.getBirthDay());
		user.setEmail(userDto.getEmail());
		user.setStatusUser(userDto.isStatusUser());
		
		return user;
	}
}
