package com.Ecomerce.API.security;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testCL {
	private static final Logger logger = LoggerFactory.getLogger(testCL.class);
	@Autowired
	JWTUserDetailsService jwtDetailsService;
	@RequestMapping("/test")
	public UserDetails testLoadUser(){
		logger.info("Test start");
		UserDetails userDetails = jwtDetailsService.loadUserByUsername("vanan");
		logger.info("Test end");
		return userDetails;
	} 
}
