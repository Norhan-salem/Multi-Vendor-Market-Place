package com.nuggets.IP.web.rest.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class CartBody {
    @NotBlank
    @NotNull
    private Long cartTD;

    @NotBlank
    @NotNull
    private Double totalPrice;

    @NotBlank
    @NotNull
    private LocalDate lastUpdatedDate;

    @NotBlank
    @NotNull
    private String couponCode;

    @NotBlank
    @NotNull
    private Integer numberOfItems;

    public void setCartTD(Long cartTD) {
        this.cartTD = cartTD;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setLastUpdatedDate(LocalDate lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public void setNumberOfItems(Integer numberOfItems) {
        this.numberOfItems = numberOfItems;
    }
}
