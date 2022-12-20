package com.Ecomerce.API.security;
import java.util.Objects;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Ecomerce.API.controllers.ProductController;
import com.Ecomerce.API.exceptions.ExceptionCustom;
import com.Ecomerce.API.models.dtos.UserDto;
import com.Ecomerce.API.models.entities.User;
import com.Ecomerce.API.models.objects.ResponseObject;
import com.Ecomerce.API.repositories.UserRepository;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationController.class);
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JWTUserDetailsService userDetailsService;
	
	@Autowired
	private UserRepository userRepository;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws ExceptionCustom,Exception {
		logger.info("Create Authentication Token is Starting");
		UserDetails userDetails = null;
		try {
			userDetails = userDetailsService
					.loadUserByUsername(authenticationRequest.getAccountName());
		} catch(Exception e) {
			throw new ExceptionCustom("Thất bại","Không xác thực được người dùng", "");
		}
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getAccountName(), authenticationRequest.getPassword()));
		} catch (Exception e) {
			logger.info("Create Authentication Token is ended");
			throw new ExceptionCustom("Thất bại","Không xác thực được người dùng", "");
		}
		

		final String token = jwtTokenUtil.generateToken(userDetails);
		logger.info("Create Authentication Token is ended");
		logger.info(userDetails.getAuthorities().toString());
		return ResponseEntity.ok(new JwtResponse(token, "Bearer"));
	}
	
	@PostMapping(value="/register")
	public ResponseEntity<?> createAccount(@RequestBody UserDto userDto) throws Exception {
		final Optional<User> user = userRepository.findById(userDto.getAccountName());
		if(!user.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseObject("Thất bại",
					"Tên tài khoản đã tồn tại", ""));
		//return ResponseEntity.ok(userDetailsService.save(userDto));
		userDto.setRole("USER");
		userDto.setStatusUser(true);
		userDto.setPass(passwordEncoder().encode(userDto.getPass()));
		User userSave = userDetailsService.save(userDto);
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Hoàn thành",
				"Đăng ký thành công", userSave));
	}
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}