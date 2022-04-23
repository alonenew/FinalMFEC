package com.sittichai.backend.exception;

import org.springframework.http.HttpStatus;

public class BusinessException extends CommonException {
	
	public BusinessException(String code, String message) {
		super(HttpStatus.OK, code, message);
	}

}
