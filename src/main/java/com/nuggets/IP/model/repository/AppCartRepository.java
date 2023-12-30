package com.nuggets.IP.model.repository;

import com.nuggets.IP.exception.EmptyCartException;
import com.nuggets.IP.exception.OrderNotExistsException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppCartRepository extends JpaRepository<Cart, Long> {
//    List<Cart> findNumberOfCartItems(int numberOfItems);

//    @Override
//    Optional<Cart> findById(Long aLong);

//    void addItemToCart(Cart cartID);
//    void removeItemFromCart(Cart cartID) throws EmptyCartException;
Optional<Cart> findByCartId(Long cartId);

}
