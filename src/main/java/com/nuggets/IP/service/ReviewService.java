package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.exception.ReviewDoesNotExistException;
import com.nuggets.IP.exception.SellerDoesNotExistException;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.controller.rest.request.ReviewBody;

import java.util.List;

public interface ReviewService {
    Review createReview(ReviewBody reviewBody);
    Review editReview(ReviewBody reviewBody);
    void deleteReview(Long reviewId);
    List<Review> getUserReviews(String username) throws ReviewDoesNotExistException;

    List<Review> getProductReviews(Long productId) throws ReviewDoesNotExistException;

    List<Review> getSellerReviews(Long sellerId) throws SellerDoesNotExistException;

    List<Review> getReviewsByUser(Long appUserId) throws AppUserDoesNotExistException;
}
