package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.model.repository.SellerRepository;
import com.nuggets.IP.service.EncryptionService;
import com.nuggets.IP.service.SellerService;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private final SellerRepository sellerRepository;
    @Autowired
    private final EncryptionService encryptionService;

    public SellerServiceImpl(SellerRepository sellerRepository, EncryptionService encryptionService) {
        this.sellerRepository = sellerRepository;
        this.encryptionService = encryptionService;
    }

    @Override
    public Seller register(SellerRegistrationBody registrationBody) throws SellerAlreadyExistsException {
        if (sellerRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent() ||
                sellerRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()) {
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

        return sellerRepository.save(seller);
    }

}
