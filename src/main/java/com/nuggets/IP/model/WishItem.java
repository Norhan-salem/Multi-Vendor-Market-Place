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
    @JoinTable(name = "app_users_wish_items",
            joinColumns = @JoinColumn(name = "wish_Item_id"),
            inverseJoinColumns = @JoinColumn(name = "app_Users_id"))
    private List<AppUser> appUsers = new ArrayList<>();

}