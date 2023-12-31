package com.nuggets.IP.controller.rest.request;

import com.nuggets.IP.model.Image;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

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

    private MultipartFile image;


}
