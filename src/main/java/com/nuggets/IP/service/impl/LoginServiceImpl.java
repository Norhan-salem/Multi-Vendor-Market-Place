package com.nuggets.IP.service.impl;

import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.service.EncryptionService;
import com.nuggets.IP.service.JWTService;
import com.nuggets.IP.service.LoginService;
import com.nuggets.IP.web.rest.request.LoginBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private EncryptionService encryptionService;
    private JWTService jwtService;
    @Override
    public String login(LoginBody loginBody) {
        Optional<AppUser> appUser = appUserRepository.findByUsernameIgnoreCase(loginBody.getUsername());
        if (appUser.isPresent()) {
            if (encryptionService.verifyPassword(loginBody.getPassword(), appUser.get().getPassword())) {
                return jwtService.generateJWTToken(appUser.get());
            }
        }
        return null;
    }

}
