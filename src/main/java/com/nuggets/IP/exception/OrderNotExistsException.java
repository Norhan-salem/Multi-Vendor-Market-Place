package com.nuggets.IP.exception;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public class OrderNotExistsException extends Exception{
    public OrderNotExistsException(String message){super(message);}
}

