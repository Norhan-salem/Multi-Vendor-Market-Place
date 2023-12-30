package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.model.Cart;
import com.nuggets.IP.model.repository.AppCartRepository;
import com.nuggets.IP.service.AppCartService;
import com.nuggets.IP.web.rest.request.CartBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppCartServiceImpl implements AppCartService {
    @Autowired
    private AppCartRepository appCartRepository;
    public AppCartServiceImpl(AppCartRepository appCartRepository) {
        this.appCartRepository = appCartRepository;
    }


    @Override
    public void addItemToCart(CartBody  cartBody) {

    }

    @Override
    public void removeItemFromCart(Cart cartID)  throws EmptyCartException{

    }

    @Override
    public void updateCartItemQuantity(CartBody cartBody) {

    }

    @Override
    public List<Cart> getCartContents(CartBody cartBody) {
        return null;
    }

    @Override
    public void clearCart(CartBody cartBody) {

    }

    @Override
    public Double calculateCartTotal(CartBody cartBody) {
        return null;
    }
}
