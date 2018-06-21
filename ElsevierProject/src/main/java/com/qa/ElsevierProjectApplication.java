package com.qa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages={"com.qa.restful.controllers","com.qa.models","com.qa.services"})
public class ElsevierProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElsevierProjectApplication.class, args);
	}
}
