package com.nuggets.IP.controller.rest.request;
import com.nuggets.IP.model.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class OrderBody {

    @NotNull
    @NotBlank
    private String status;

    @NotNull
    @NotBlank
    private Integer quantity;

    @NotNull
    @NotBlank
    private List<Product> products;


}
