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
			System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
			System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		}
		catch (Exception e){}
		SpringApplication.run(AsutApplication.class, args);}

}
