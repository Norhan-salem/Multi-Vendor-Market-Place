package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.exception.CartDoesNotExistException;
import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.model.Product;

import java.util.List;

public interface CartService {
    void addItemToCart(String username , Product product)throws CartDoesNotExistException, AppUserDoesNotExistException;

    void removeItemFromCart(long cartId,Product product)  throws EmptyCartException;

    List<Product> getCartContents(long cartId) throws CartDoesNotExistException;
    void clearCart(long cartId) throws CartDoesNotExistException;

    Double calculateCartTotal(long cartId) throws CartDoesNotExistException;
}
