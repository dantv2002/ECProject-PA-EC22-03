package com.Ecomerce.API.services.impls;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.dtos.UserInfoDto;
import com.Ecomerce.API.models.entities.Product;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.repositories.ProductRepository;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.services.UserService;
import com.Ecomerce.API.utils.converter.UserConverter;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private UserConverter converter;
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public UserDto findUserByName(String name) {
		
		return converter.convertToDto(repository.findById(name).orElse(null));
	}

	@Override
	public boolean isUserSellingThisProduct(String userName, int productId) {
		User user = repository.findById(userName).orElse(null);
		Product product = productRepository.findById(productId).orElse(null);
		if (user == null || product == null) {
			return false;
		}
		if (user == product.getUser()) {
			return true;
		}
		
		return false;
	}

	@Override
	public UserInfoDto findInfoCurrentUser(String accountName) {
		User user = repository.findById(accountName).orElse(null);
		
		return converter.convertToUserInfoDto(user);
	}

	@Override
	public UserDto update(String accountName, UserDto userDto) {
		User user = repository.findById(accountName).orElse(null);
		if (user == null) {
			return null;
		}
		userDto.setAccountName(accountName);
		userDto.setStatusUser(true);
		userDto.setRole("USER");
		user.setAccountName(userDto.getAccountName());
		user.setPass(passwordEncoder().encode(userDto.getPass()));
		user.setImageUser(userDto.getImageUser());
		user.setStatusUser(true); 
		user.setRole("USER");
		userDto.setPass(user.getPass());
	
		try {
			repository.save(user);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		return userDto;
	}
}
