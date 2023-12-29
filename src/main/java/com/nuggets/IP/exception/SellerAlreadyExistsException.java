package com.nuggets.IP.exception;

public class SellerAlreadyExistsException extends AppUserAlreadyExistsException{
    public SellerAlreadyExistsException(String message) {
        super(message);
    }
}
