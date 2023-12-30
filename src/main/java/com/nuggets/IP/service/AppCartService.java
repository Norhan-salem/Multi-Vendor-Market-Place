package com.nuggets.IP.service;

import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Cart;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.web.rest.request.CartBody;

import java.util.List;

public interface AppCartService {
    void addItemToCart(CartBody cartBody);
//    void removeItemFromCart(CartBody cartBody) throws EmptyCartException;

    void removeItemFromCart(Cart cartID)  throws EmptyCartException;

    void updateCartItemQuantity(CartBody cartBody);
    List<Cart> getCartContents(CartBody cartBody);
    void clearCart(CartBody cartBody);

    Double calculateCartTotal(CartBody cartBody);
}
