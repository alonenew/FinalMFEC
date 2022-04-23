package com.sittichai.backend.exception;

import org.springframework.http.HttpStatus;

public class CommonException extends RuntimeException{
	
	private final HttpStatus status;
	private final String code;
	private final Exception causeException;
	
	public CommonException(HttpStatus status, String code, String message) {
		super(message);
		this.status = status;
		this.code = code;
		this.causeException = null;
	}
	
	public CommonException(HttpStatus status, String code, String message, Exception causeException) {
		super(message);
		this.status = status;
		this.code = code;
		this.causeException = causeException;
	}
	
	public HttpStatus getStatus() {
		return status;
	}

	public String getCode() {
		return code;
	}

	public Exception getCauseException() {
		return causeException;
	}
}
