package com.example.demo.Controller;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.StatusResponse.StatusResponse;



@RestController
@RequestMapping("/v1")
public class StatusController {
	
	private final RestTemplate restTemplate;
	
	public StatusController(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

    @GetMapping("/amazon-status")
	public ResponseEntity<StatusResponse> getAmazonStatus() {
		return getStatus("https://www.amazon.com");
	}
	
	@GetMapping("/google-status")
	public ResponseEntity<StatusResponse> getGoogleStatus() {
		return getStatus("https://www.google.com/");
	}
	
	private ResponseEntity<StatusResponse> getStatus(String url) {
		StatusResponse statusResponse;
		ResponseEntity<String> responseEntity;
		HttpStatusCode statusCode;
		LocalDateTime startTime = LocalDateTime.now();
		LocalDateTime endTime = LocalDateTime.now();
		long duration = Duration.between(startTime, endTime).toMillis();
		try {			
			responseEntity = restTemplate.getForEntity(url, String.class);
			statusCode = responseEntity.getStatusCode();
			statusResponse = new StatusResponse(url, statusCode.value(), duration, endTime);
			
		} catch(Exception e) {
			statusResponse = new StatusResponse(500, duration, endTime, "An Error Occured: "+e.getMessage());
		}
		
		return ResponseEntity.ok(statusResponse);
	}
	
}
