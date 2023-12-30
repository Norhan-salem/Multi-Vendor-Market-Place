package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.model.Cart;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.repository.AppCartRepository;
import com.nuggets.IP.service.AppCartService;
import com.nuggets.IP.web.rest.request.CartBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppCartServiceImpl implements AppCartService {
    @Autowired
    private AppCartRepository appCartRepository;

    public AppCartServiceImpl(AppCartRepository appCartRepository) {
        this.appCartRepository = appCartRepository;
    }


    @Override
    public void addItemToCart(Cart cart, Product product) {
        Optional<Cart> optionalCart = appCartRepository.findByCartId(cart.getCartId());
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            existingCart.getProducts().add(product);
            appCartRepository.save(existingCart);
        } else {
            cart.setCartId(cart.getCartId());
            cart.getProducts().add(product);
            appCartRepository.save(cart);
        }

    }

    @Override
    public void removeItemFromCart(Cart cart, Product product) throws EmptyCartException {
        Optional<Cart> optionalCart = appCartRepository.findByCartId(cart.getCartId());
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            existingCart.getProducts().remove(product);
            appCartRepository.save(existingCart);
        } else {
            throw new EmptyCartException("No Cart Found");
        }
    }
//
//    @Override
//    public void updateCartItemQuantity(CartBody cartBody) {
//
//    }

    @Override
    public List<Product> getCartContents(CartBody cartBody) {
        Optional<Cart> optionalCart = appCartRepository.findByCartId(cartBody.getCartID());
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            return existingCart.getProducts();

        } else {
            return null;
        }

    }

    @Override
    public void clearCart(CartBody cartBody) {

        if (appCartRepository.findByCartId(cartBody.getCartID()).isPresent()) {
            appCartRepository.deleteByCartId(cartBody.getCartID());
        }
    }

    @Override
    public Double calculateCartTotal(CartBody cartBody) {
        Double totalPrice = 0.0;
        if (appCartRepository.findByCartId(cartBody.getCartID()).isPresent()) {
            Optional<Cart> optionalCart = appCartRepository.findByCartId(cartBody.getCartID());
            for (Product product : optionalCart.get().getProducts()) {
                totalPrice += product.getPrice();
            }
            cartBody.setTotalPrice(totalPrice);
            return totalPrice;
        } else {
            return -1.0;
        }
    }
}