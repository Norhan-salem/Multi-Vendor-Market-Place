package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByProductId(Long productId);

    void deleteByProductId(Long productId);

    long countByProductId(Long productId);
    Optional<List<Product>> findBySeller_UserID(Long sellerId);
}
