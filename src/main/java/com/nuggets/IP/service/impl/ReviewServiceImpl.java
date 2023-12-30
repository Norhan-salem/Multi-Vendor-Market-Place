package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.ReviewDoesNotExistException;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.model.repository.ProductRepository;
import com.nuggets.IP.model.repository.ReviewRepository;
import com.nuggets.IP.model.repository.SellerRepository;
import com.nuggets.IP.service.ReviewService;
import com.nuggets.IP.web.rest.request.ReviewBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private final ReviewRepository reviewRepository;

    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final SellerRepository sellerRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductRepository productRepository,
                             SellerRepository sellerRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
        this.sellerRepository = sellerRepository;
    }
    @Override
    public Review createReview(ReviewBody reviewBody) {
        Review review = new Review();
        review.setComment(reviewBody.getComment());
        review.setRating(reviewBody.getRating());
        review.setProductReview(productRepository.findById(reviewBody.getProductReviewId()).orElse(null));
        review.setSeller(sellerRepository.findById(reviewBody.getSellerReviewId()).orElse(null));
        return reviewRepository.save(review);
    }

    @Override
    public Review editReview(ReviewBody reviewBody) {
        Review review = new Review();
        review.setComment(reviewBody.getComment());
        review.setRating(reviewBody.getRating());
        review.setProductReview(productRepository.findById(reviewBody.getProductReviewId()).orElse(null));
        review.setSeller(sellerRepository.findById(reviewBody.getSellerReviewId()).orElse(null));
        return reviewRepository.save(review);
    }

    @Override
    public void deleteReview(Long reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    @Override
    public List<Review> getUserReviews(String username) throws ReviewDoesNotExistException {
        return reviewRepository.findByAppUser_Username(username).orElseThrow(() -> new ReviewDoesNotExistException("Review does not exist"));
    }

    @Override
    public List<Review> getProductReviews(Long productId) throws ReviewDoesNotExistException {
        return reviewRepository.findByProductReview_Id(productId).orElseThrow(() -> new ReviewDoesNotExistException("Review does not exist"));
    }

    @Override
    public List<Review> getSellerReviews(Long sellerId) throws ReviewDoesNotExistException {
        return reviewRepository.findBySeller_Id(sellerId).orElseThrow(() -> new ReviewDoesNotExistException("Review does not exist"));
    }

    @Override
    public List<Review> getReviewsByUser(Long appUserId) throws ReviewDoesNotExistException {
        return reviewRepository.findByAppUser_Id(appUserId).orElseThrow(() -> new ReviewDoesNotExistException("Review does not exist"));
    }
}
