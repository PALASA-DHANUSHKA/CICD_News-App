package com.klef.fsd.springboot;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication(scanBasePackages = "com.klef.fsd.springboot")
public class SpringStarterProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringStarterProjectApplication.class, args);
		System.out.println("Hii SpringBoot...!!!");
	}

}
