package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.exception.CartDoesNotExistException;
import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Cart;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.model.repository.CartRepository;
import com.nuggets.IP.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;
    private final AppUserRepository appUserRepository;

    public CartServiceImpl(CartRepository appCartRepository,
                           AppUserRepository appUserRepository) {
        this.cartRepository = appCartRepository;
        this.appUserRepository = appUserRepository;
    }


    @Override
    public void addItemToCart(String username, Product product) throws CartDoesNotExistException, AppUserDoesNotExistException {
        Optional<Cart> optionalCart = cartRepository.findByAppUser_Username(username);
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            existingCart.getProducts().add(product);
            cartRepository.save(existingCart);
        } else {
            Optional<AppUser> appUser = appUserRepository.findByUsername(username);
            if (appUser.isPresent()) {
                Cart cart = new Cart();
                cart.setAppUser(appUser.get());
                cart.getProducts().add(product);
                cartRepository.save(cart);
            } else {
                throw new AppUserDoesNotExistException("No User Found");
            }

            throw new CartDoesNotExistException("No Cart Found");
        }

    }

    @Override
    public void removeItemFromCart(long cartId, Product product) throws EmptyCartException {
        Optional<Cart> optionalCart = cartRepository.findByCartId(cartId);
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            existingCart.getProducts().remove(product);
            cartRepository.save(existingCart);
        } else {
            throw new EmptyCartException("No Cart Found");
        }
    }

    @Override
    public List<Product> getCartContents(long cartId) throws CartDoesNotExistException{
        Optional<Cart> optionalCart = cartRepository.findByCartId(cartId);
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            return existingCart.getProducts();
        } else {
            throw new CartDoesNotExistException("No Cart Found");
        }

    }

    @Override
    public void clearCart(long cartId) throws CartDoesNotExistException {
        Optional<Cart> optionalCart = cartRepository.findByCartId(cartId);
        if (optionalCart.isPresent()) {
            Cart existingCart = optionalCart.get();
            existingCart.getProducts().clear();
            cartRepository.save(existingCart);
        }else {
            throw new CartDoesNotExistException("No Cart Found");
        }
    }

    @Override
    public Double calculateCartTotal(long cartId) throws CartDoesNotExistException {
        Double totalPrice = 0.0;
        Optional<Cart> optionalCart = cartRepository.findByCartId(cartId);
        if (optionalCart.isPresent()) {
            for (Product product : optionalCart.get().getProducts()) {
                totalPrice += product.getPrice();
            }
            return totalPrice;
        } else {
            throw new CartDoesNotExistException("No Cart Found");
        }
    }
}