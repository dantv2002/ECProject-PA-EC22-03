package com.ECProjectPAEC2203.APIEC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ApiecApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiecApplication.class, args);
	}

}
