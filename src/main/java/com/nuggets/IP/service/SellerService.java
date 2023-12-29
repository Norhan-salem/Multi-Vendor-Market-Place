package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import com.nuggets.IP.web.rest.request.LoginBody;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;

public interface SellerService {
    Seller register(SellerRegistrationBody registrationBody) throws SellerAlreadyExistsException;
}
