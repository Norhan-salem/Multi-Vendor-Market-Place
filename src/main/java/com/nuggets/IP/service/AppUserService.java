package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;

public interface AppUserService {

    public AppUser register(AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException;
}
