package com.nuggets.IP.web.rest.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CartBody {

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

}
