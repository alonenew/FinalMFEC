package com.sittichai.backend.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.sittichai.backend.constant.AppConstant;

public class SuccessResponse<T> {

    private String code;
	private String description;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private T data;
	
	public SuccessResponse() {
		this.code = AppConstant.SUCCESS_CODE;
		this.description = AppConstant.SUCCESS_DESC;
	}
	
	public SuccessResponse(T data) {
		this.code = AppConstant.SUCCESS_CODE;
		this.description = AppConstant.SUCCESS_DESC;
		this.data = data;
	}
	
	public SuccessResponse(String code, String description, T data) {
		this.code = code;
		this.description = description;
		this.data = data;
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
    
}
