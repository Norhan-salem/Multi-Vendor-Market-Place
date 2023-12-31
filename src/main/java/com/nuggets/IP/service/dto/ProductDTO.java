package com.nuggets.IP.service.dto;

import com.nuggets.IP.model.Image;
import com.nuggets.IP.model.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private long productId;

    private Seller seller;

    private String description;

    private String name;

    private List<ReviewDTO> reviewsDTO;

    private Image image;

}
