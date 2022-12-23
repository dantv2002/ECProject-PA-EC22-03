package com.Ecomerce.API.security;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.repositories.UserRepository;

@Service
public class JWTUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		com.Ecomerce.API.models.entities.User user = userRepository.findById(username).orElse(null);
		List<SimpleGrantedAuthority> roles = new ArrayList<>();
		if (user != null) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
			return new User(user.getAccountName(), user.getPass(), roles);
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
	
	public com.Ecomerce.API.models.entities.User save(UserDto userDto){
		com.Ecomerce.API.models.entities.User userEntity = new com.Ecomerce.API.models.entities.User();
		userEntity.setAccountName(userDto.getAccountName());
		userEntity.setPass(userDto.getPass());
		userEntity.setImageUser(userDto.getImageUser());
		userEntity.setStatusUser(userDto.isStatusUser());
		userEntity.setRole(userDto.getRole());
		userRepository.save(userEntity);
		return userEntity;
	}
}
