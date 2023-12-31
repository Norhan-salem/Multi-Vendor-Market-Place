package com.nuggets.IP.controller.rest.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewBody {
    private String comment;
    @NotNull
    @NotBlank
    private Short rating;
    private Long productReviewId;
    private Long sellerReviewId;
}
