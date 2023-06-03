package com.example.demo.StatusResponse;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String errorMessage;
	private int statusCode;
	private long duration;
	private LocalDateTime date;
	
	public ErrorResponse(String errorMessage, int statusCode, long duration, LocalDateTime date) {
		super();
		this.errorMessage = errorMessage;
		this.statusCode = statusCode;
		this.duration = duration;
		this.date = date;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public long getDuration() {
		return duration;
	}

	public void setDuration(long duration) {
		this.duration = duration;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}	
}
