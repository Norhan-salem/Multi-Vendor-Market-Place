package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.service.AppUserService;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public AppUser register(AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException {
        if (appUserRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent() ||
                appUserRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()) {
            throw new AppUserAlreadyExistsException("User already exists");
        }
        AppUser appUser = new AppUser();
        appUser.setUsername(registrationBody.getUsername());
        appUser.setPassword(registrationBody.getPassword());
        // TODO: encrypt password
        appUser.setEmail(registrationBody.getEmail());
        appUser.setFirstName(registrationBody.getFirstName());
        appUser.setLastName(registrationBody.getLastName());
        appUser.setPhoneNumber(registrationBody.getPhoneNumber());
        return appUserRepository.save(appUser);
    }
}
