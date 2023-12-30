package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.service.AppUserService;
import com.nuggets.IP.service.EncryptionService;
import com.nuggets.IP.service.JWTService;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import com.nuggets.IP.web.rest.request.LoginBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    private final AppUserRepository appUserRepository;
    @Autowired
    private final EncryptionService encryptionService;

    public AppUserServiceImpl(AppUserRepository appUserRepository, EncryptionServiceImpl encryptionService) {
        this.appUserRepository = appUserRepository;
        this.encryptionService = encryptionService;
    }

    @Override
    public AppUser register(AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException {
        if (appUserRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent() ||
                appUserRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()) {
            throw new AppUserAlreadyExistsException("User already exists");
        }
        AppUser appUser = new AppUser();
        appUser.setUsername(registrationBody.getUsername());
        appUser.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));
        appUser.setEmail(registrationBody.getEmail());
        appUser.setFirstName(registrationBody.getFirstName());
        appUser.setLastName(registrationBody.getLastName());
        appUser.setPhoneNumber(registrationBody.getPhoneNumber());
        return appUserRepository.save(appUser);
    }

}
