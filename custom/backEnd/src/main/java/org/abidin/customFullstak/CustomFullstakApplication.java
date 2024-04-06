package org.abidin.customFullstak;

import org.abidin.customFullstak.security.JWTTokenProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("org.abidin.customFullstak.security.JWTTokenProvider")
public class CustomFullstakApplication {

//	@Bean
//	public JWTTokenProvider jwtTokenProvider(){
//
//		return  new JWTTokenProvider();
//	}

	public static void main(String[] args) {
		SpringApplication.run(CustomFullstakApplication.class, args);
	}

}
