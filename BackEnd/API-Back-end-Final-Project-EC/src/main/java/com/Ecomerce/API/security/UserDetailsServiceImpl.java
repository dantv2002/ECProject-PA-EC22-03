package com.Ecomerce.API.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.UserService;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	UserService userService;
	@Autowired
	UserRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User userEntity = repository.findById(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
		UserDto user = userService.convertToDto(userEntity);
		return UserDetailsImpl.build(user);
	}

}
