package com.nuggets.IP;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootTest
class AsutApplicationTests {
	@BeforeAll
	public static void loadEnvVariables() {
		// Load environment variables from .env
		Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

		// Set the environment variables as system properties
		System.setProperty("db_username", dotenv.get("DB_USERNAME"));
		System.setProperty("db_password", dotenv.get("DB_PASSWORD"));
	}
	@Test
	void contextLoads() {
	}

}
