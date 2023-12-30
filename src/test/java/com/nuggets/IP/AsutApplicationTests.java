package com.nuggets.IP;

import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.model.repository.SellerRepository;
import com.nuggets.IP.service.EncryptionService;
import com.nuggets.IP.service.SellerService;
import com.nuggets.IP.service.impl.EncryptionServiceImpl;
import com.nuggets.IP.service.impl.SellerServiceImpl;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import io.github.cdimascio.dotenv.Dotenv;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class AsutApplicationTests {
	@BeforeAll
	public static void loadEnvVariables() {
		// Load environment variables from .env
		try {
			Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

			// Set the environment variables as system properties
			System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
			System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		}
		catch (Exception e){}
	}
	@Test
	void contextLoads() {
	}


}

@SpringBootTest
class SellerServiceTest {
	@BeforeAll
	public static void loadEnvVariables() {
		// Load environment variables from .env
		try {
			Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

			// Set the environment variables as system properties
			System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
			System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		}
		catch (Exception e){}
	}
	@Mock
	private SellerRepository sellerRepository;

	@Mock
	private EncryptionService encryptionService;

	@InjectMocks
	private SellerServiceImpl sellerService;

	@Test
	void testRegister() throws SellerAlreadyExistsException {
		// Mocking data
		SellerRegistrationBody registrationBody = new SellerRegistrationBody();
		registrationBody.setUsername("testuser");
		registrationBody.setPassword("@Testpassword0");
		registrationBody.setEmail("test@example.com");
		registrationBody.setFirstName("John");
		registrationBody.setLastName("Doe");
		registrationBody.setPhoneNumber("1234567890");
		registrationBody.setLocation("Test Location");
		registrationBody.setNeighborhood("Test Neighborhood");

		when(sellerRepository.findByEmailIgnoreCase("test@example.com")).thenReturn(java.util.Optional.empty());
		when(encryptionService.encryptPassword("@Testpassword0")).thenReturn("encryptedPassword");

		// Test the register method
		Seller result = sellerService.register(registrationBody);

		// Assertions
		assertNotNull(result);
		assertEquals("testuser", result.getUsername());
		assertEquals("encryptedPassword", result.getPassword());
		assertEquals("test@example.com", result.getEmail());
		assertEquals("John", result.getFirstName());
		assertEquals("Doe", result.getLastName());
		assertEquals("1234567890", result.getPhoneNumber());
		assertEquals("Test Location", result.getLocation());
		assertEquals("Test Neighborhood", result.getNeighborhood());

		// Verify that repository save method was called with the correct argument
		verify(sellerRepository, times(1)).save(result);
	}

	@Test
	void testRegisterWithExistingUser() {
		// Mocking data
		SellerRegistrationBody registrationBody = new SellerRegistrationBody();
		registrationBody.setUsername("existinguser");

		Seller existingSeller = new Seller();
		existingSeller.setUsername("existinguser");
		when(sellerRepository.findByUsernameIgnoreCase("existinguser")).thenReturn(java.util.Optional.of(existingSeller));

		// Test the register method with an existing user
		assertThrows(SellerAlreadyExistsException.class, () -> sellerService.register(registrationBody));

		// Verify that repository save method was not called
		verify(sellerRepository, never()).save(any());
	}
}
