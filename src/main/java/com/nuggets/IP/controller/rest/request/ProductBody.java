package com.nuggets.IP.controller.rest.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductBody {
    @NotBlank
    @NotNull
    private String name;
    @NotBlank
    @NotNull
    private String description;
    @NotBlank
    @NotNull
    private double price;
    @NotBlank
    @NotNull
    private int quantity;
    @NotBlank
    @NotNull
    private String sellerUsername;


}
