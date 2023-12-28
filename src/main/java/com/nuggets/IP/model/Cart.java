package com.nuggets.IP.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cart_id", nullable = false)
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

    @ToString.Exclude
    @OneToOne(cascade = CascadeType.ALL, optional = false, orphanRemoval = true)
    @JoinColumn(name = "user_id", nullable = false)
    private AppUser appUser;

    @ManyToMany(mappedBy = "carts")
    private List<Product> products = new ArrayList<>();

}