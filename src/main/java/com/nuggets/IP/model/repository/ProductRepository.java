package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
