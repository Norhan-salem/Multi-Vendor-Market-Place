package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Review;
import com.nuggets.IP.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long>{
    Optional<List<Review>> findByAppUser_Username(String username);
//    Optional<List<Review>> findByProductReview_Id(Long productId);
//    Optional<List<Review>> findBySeller_Id(Long sellerId);
//    Optional<List<Review>> findByAppUser_Id(Long appUserId);

    @Query("select r from Review r where r.productReview.productId = ?1")
    List<Review> findByProductReview_ProductId(Long productId);

    @Query("select r from Review r inner join r.seller.receivedReviews receivedReviews where receivedReviews.seller = ?1")
    List<Review> findBySeller_ReceivedReviews_Seller(Seller seller);

    @Query("select r from Review r inner join r.appUser.reviews reviews where reviews.appUser = ?1")
    List<Review> findByAppUser_Reviews_AppUser(AppUser appUser);
}
