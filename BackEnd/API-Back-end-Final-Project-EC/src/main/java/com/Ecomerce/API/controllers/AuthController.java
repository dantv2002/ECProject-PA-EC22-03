package com.Ecomerce.API.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.models.dtos.LoginDto;
import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.repositories.UserRepository;
import com.Ecomerce.API.security.JwtUtils;
import com.Ecomerce.API.security.UserDetailsImpl;
import com.Ecomerce.API.services.UserService;

@RestController
@RequestMapping(value="/api")
@CrossOrigin
public class AuthController {
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDto loginDto) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginDto.getAccountName(), loginDto.getPassWord()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		String roles = userDetails.getAuthorities().toString();

		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("Hoàn thành", "Lấy các phiên đấu giá thành công", userDetails));
//		return ResponseEntity.ok(new JwtResponse(jwt, 
//												 userDetails.getId(), 
//												 userDetails.getUsername(), 
//												 userDetails.getEmail(), 
//												 roles));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody LoginDto register) {
		if (userRepository.existsByAccountName(register.getAccountName())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
					new ResponseObject("Thất bại", "Tên tài khoản đã tồn tại!", ""));
		}

		// Create new user's account
		UserDto user = new UserDto(register.getAccountName(), 
							 encoder.encode(register.getPassWord()), null, true, null);
		
		userService.save(user);

		return ResponseEntity.ok("User registered successfully!");
	}
}
