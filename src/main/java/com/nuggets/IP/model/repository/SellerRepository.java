package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    Optional<Seller> findByUsernameIgnoreCase(String username);
    Optional<Seller> findByEmailIgnoreCase(String email);
}
