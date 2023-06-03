package com.example.demo.StatusResponse;

import java.time.LocalDateTime;

public class StatusResponse {
	private String url;
	private int statusCode;
	private long duration;
	private LocalDateTime date;
	
	private String error;
	
	public StatusResponse() {
		
	}
	
	public StatusResponse(int statusCode, long duration, LocalDateTime date, String error) {
		this.setError(error);
        this.statusCode = statusCode;
        this.duration = duration;
        this.setDate(date);
	}
	
	public StatusResponse(String url, int statusCode, long duration, LocalDateTime date) {
		this.url = url;
        this.statusCode = statusCode;
        this.duration = duration;
        this.setDate(date);
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
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

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
		
}
