package com.nuggets.IP.web.rest;

import com.nuggets.IP.exception.ReviewDoesNotExistException;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.service.ReviewService;
import com.nuggets.IP.web.rest.request.ReviewBody;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
    public @ResponseBody ResponseEntity<Map<String,Object>> getAllReviews(@RequestParam("username") String username) throws ReviewDoesNotExistException {
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

    @PostMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> createReview(@RequestBody ReviewBody reviewBody) {
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", reviewService.createReview(reviewBody));
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }
}
