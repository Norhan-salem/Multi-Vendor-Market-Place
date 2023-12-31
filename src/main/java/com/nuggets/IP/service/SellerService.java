package com.nuggets.IP.service;

import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.controller.rest.request.SellerRegistrationBody;

public interface SellerService {
    Seller register(SellerRegistrationBody registrationBody) throws SellerAlreadyExistsException;
}
