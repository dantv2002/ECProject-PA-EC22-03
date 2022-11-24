package com.ECProject.API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ECProject.API.common.common;

@SpringBootApplication
public class ApiBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiBackendApplication.class, args);
		common.LOGGER.info("STARTED MY PROJECT!!!!!!!!!!!!!!");
	}

}
