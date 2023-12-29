package com.nuggets.IP;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;
@SpringBootApplication
public class AsutApplication {

	public static void main(String[] args) {
		try {
			Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

			// Set the environment variables
			System.setProperty("spring.datasource.username", dotenv.get("DB_USERNAME"));
			System.setProperty("spring.datasource.password", dotenv.get("DB_PASSWORD"));
		}
		catch (Exception e){}
		SpringApplication.run(AsutApplication.class, args);}

}
