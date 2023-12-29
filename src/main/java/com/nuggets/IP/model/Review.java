package com.nuggets.IP.model;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "review_id", nullable = false)
    private Long reviewId;

    @Column(name = "comment", length = 1000)
    private String comment;

    @Column(name = "rating", nullable = false)
    private Short rating;

    @ToString.Exclude
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private AppUser appUser;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_review_id")
    private Product productReview;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "seller_review_id")
    private Seller seller;

}