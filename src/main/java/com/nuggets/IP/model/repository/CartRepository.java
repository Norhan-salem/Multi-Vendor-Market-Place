package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByCartId(Long cartId);

    void deleteByCartId(Long cartId);

    @Query("select c from Cart c where c.appUser.username = ?1")
    Optional<Cart> findByAppUser_Username(String username);
}
