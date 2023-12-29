package com.nuggets.IP.service;

import com.nuggets.IP.model.AppUser;

public interface JWTService {

    String generateJWTToken(AppUser appUser);
}
