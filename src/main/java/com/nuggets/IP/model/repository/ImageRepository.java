package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findByName(String name);

    Optional<Image> findByProduct_ProductId(Long productId);


}
