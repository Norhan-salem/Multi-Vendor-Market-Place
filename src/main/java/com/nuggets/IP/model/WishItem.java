package com.nuggets.IP.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class WishItem extends Product {
    @Column(name = "remainder", nullable = false)
    private Integer remainder;

    @Column(name = "discount_offer")
    private Double discountOffer;

    @ToString.Exclude
    @ManyToMany
    @JoinTable(name = "appUsers_wishItems",
            joinColumns = @JoinColumn(name = "wishItem_id"),
            inverseJoinColumns = @JoinColumn(name = "appUsers_id"))
    private List<AppUser> appUsers = new ArrayList<>();

}