package com.Ecomerce.API.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.Ecomerce.API.models.objects.ResponseObject;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
				new ResponseObject(e.getStatus(), e.getMessage(), e.getData()));
	}
	@ExceptionHandler(ExceptionCustom.class)
	public ResponseEntity<?> exceptionCustom(ExceptionCustom e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
				new ResponseObject(e.getStatus(), e.getMessage(), e.getData()));
	}
}
