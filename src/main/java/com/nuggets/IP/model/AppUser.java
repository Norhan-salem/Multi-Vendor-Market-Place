package com.nuggets.IP.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "app_user")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "email", nullable = false, unique = true, length = 320)
    private String email;

    @Column(name = "password", nullable = false, unique = true, length = 1000)
    private String password;

    @Column(name = "cart_id", nullable = false, unique = true)
    private Long cartId;

    @Column(name = "total_price", nullable = false)
    private Double totalPrice;

    @Column(name = "creation_date", nullable = false)
    private LocalDate creationDate;

    @Column(name = "last_updated_date", nullable = false)
    private LocalDate lastUpdatedDate;

    @Column(name = "coupon_code")
    private String couponCode;

    @Column(name = "number_of_items", nullable = false)
    private Integer numberOfItems;

}