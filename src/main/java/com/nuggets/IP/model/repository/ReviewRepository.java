package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long>{
    Optional<List<Review>> findByAppUser_Username(String username);
    Optional<List<Review>> findByProductReview_Id(Long productId);
    Optional<List<Review>> findBySeller_Id(Long sellerId);
    Optional<List<Review>> findByAppUser_Id(Long appUserId);
}
