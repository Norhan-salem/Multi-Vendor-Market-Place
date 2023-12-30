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
public class Seller extends AppUser {
    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "neighborhood", nullable = false)
    private String neighborhood;

    @ToString.Exclude
    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AppOrder> receivedOrders = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> receivedReviews = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products = new ArrayList<>();

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<StatisticWidgets> statisticWidgets = new ArrayList<>();

}