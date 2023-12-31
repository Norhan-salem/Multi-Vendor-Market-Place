package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.controller.rest.request.AppUserRegistrationBody;

public interface AppUserService {

    AppUser register(AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException;
    void deleteAppUser(Long appUserId);
}
