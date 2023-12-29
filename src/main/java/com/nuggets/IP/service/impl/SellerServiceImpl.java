package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.service.EncryptionService;
import com.nuggets.IP.service.JWTService;
import com.nuggets.IP.service.SellerService;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements SellerService {

    private final AppUserRepository appUserRepository;

    private final EncryptionService encryptionService;

    private JWTService jwtService;
    public SellerServiceImpl(AppUserRepository appUserRepository, EncryptionServiceImpl encryptionService) {
        this.appUserRepository = appUserRepository;
        this.encryptionService = encryptionService;
    }

    @Override
    public Seller register(SellerRegistrationBody registrationBody) throws SellerAlreadyExistsException {
        if (appUserRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent() ||
                appUserRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()) {
            throw new SellerAlreadyExistsException("User already exists");
        }
        Seller seller = new Seller();
        seller.setUsername(registrationBody.getUsername());
        seller.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));
        seller.setEmail(registrationBody.getEmail());
        seller.setFirstName(registrationBody.getFirstName());
        seller.setLastName(registrationBody.getLastName());
        seller.setPhoneNumber(registrationBody.getPhoneNumber());
        seller.setLocation(registrationBody.getLocation());
        seller.setNeighborhood(registrationBody.getNeighborhood());
        
        return appUserRepository.save(seller);
    }
}
