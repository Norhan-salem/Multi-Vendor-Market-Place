package com.nuggets.IP.service;

import com.nuggets.IP.exception.ReviewDoesNotExistException;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.web.rest.request.ReviewBody;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    Review createReview(ReviewBody reviewBody);
    Review editReview(ReviewBody reviewBody);
    void deleteReview(Long reviewId);
    List<Review> getUserReviews(String username) throws ReviewDoesNotExistException;

    List<Review> getProductReviews(Long productId) throws ReviewDoesNotExistException;

    List<Review> getSellerReviews(Long sellerId) throws ReviewDoesNotExistException;

    List<Review> getReviewsByUser(Long appUserId) throws ReviewDoesNotExistException;
}
