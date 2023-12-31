package com.nuggets.IP.controller.rest;

import com.nuggets.IP.controller.rest.request.ReviewBody;
import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.exception.ReviewDoesNotExistException;
import com.nuggets.IP.exception.SellerDoesNotExistException;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
public class ReviewResource {

    @Autowired
    private ReviewService reviewService;

    public ReviewResource(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    @GetMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> getAllReviews(@RequestParam("username") String username){
        try{
            List<Review> reviews = reviewService.getUserReviews(username);
            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", reviews);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (ReviewDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{productId}")
    public @ResponseBody ResponseEntity<Map<String,Object>> getProductReviews(@PathVariable("productId") Long productId){
        try{
            List<Review> reviews = reviewService.getProductReviews(productId);
            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", reviews);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (ReviewDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{sellerId}")
    public @ResponseBody ResponseEntity<Map<String,Object>> getSellerReviews(@PathVariable("sellerId") Long sellerId){
        try{
            List<Review> reviews = reviewService.getSellerReviews(sellerId);
            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", reviews);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (SellerDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/{appUserId}")
    public @ResponseBody ResponseEntity<Map<String,Object>> getUserReviews(@PathVariable("appUserId") Long appUserId){
        try{
            List<Review> reviews = reviewService.getReviewsByUser(appUserId);
            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", reviews);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (AppUserDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{reviewId}")
    public @ResponseBody ResponseEntity<Map<String,Object>> deleteReview(@PathVariable("reviewId") Long reviewId) {
        Map<String,Object> responseMap = new HashMap<>();
        reviewService.deleteReview(reviewId);
        responseMap.put("result", "Review deleted successfully");
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }

    @PostMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> createReview(@RequestBody ReviewBody reviewBody) {
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", reviewService.createReview(reviewBody));
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }
}
