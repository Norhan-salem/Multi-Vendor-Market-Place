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

    @Column(name = "discount_offer")
    private Double discountOffer;

    @ToString.Exclude
    @ManyToMany
    @JoinTable(name = "APP_USERS_WISH_ITEMS",
            joinColumns = @JoinColumn(name = "WISH_ITEM_ID"),
            inverseJoinColumns = @JoinColumn(name = "APP_USERS_ID"))
    private List<AppUser> appUsers = new ArrayList<>();

}