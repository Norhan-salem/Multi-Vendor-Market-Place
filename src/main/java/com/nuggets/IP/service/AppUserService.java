package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import com.nuggets.IP.web.rest.request.LoginBody;

public interface AppUserService {

    AppUser register(AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException;

    String login(LoginBody loginBody);
}
