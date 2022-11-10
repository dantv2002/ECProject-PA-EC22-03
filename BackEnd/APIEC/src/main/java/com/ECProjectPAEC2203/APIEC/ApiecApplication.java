package com.ECProjectPAEC2203.APIEC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ECProjectPAEC2203.APIEC.common.common;

@SpringBootApplication
public class ApiecApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiecApplication.class, args);
		common.LOGGER.info("STARTED MY PROJECT!!!!!!!!!!!!!!");
	}

}
