package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.exception.SellerAlreadyExistsException;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.service.SellerService;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements SellerService {

    @Override
    public Seller register(SellerRegistrationBody registrationBody) throws SellerAlreadyExistsException {
        return null;
    }
}
