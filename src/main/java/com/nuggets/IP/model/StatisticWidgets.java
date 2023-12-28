package com.nuggets.IP.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "statistic_widgets")
public class StatisticWidgets {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "widget_id", nullable = false)
    private Long widgetId;

    @Column(name = "loss", nullable = false)
    private Double loss;

    @Column(name = "revenue", nullable = false)
    private Double revenue;

    @Column(name = "total_listings", nullable = false)
    private Integer totalListings;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "time")
    private LocalTime time;

    @Column(name = "profit", nullable = false)
    private Double profit;

    @ToString.Exclude
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "seller_id")
    private Seller seller;

}