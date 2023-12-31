package com.nuggets.IP.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppOrderDTO {

    private long id;

    private double price;

    private int numberOfItems;

    private double discount;

    private List<ProductDTO> productsDTO;


    public double calculateDiscount(){
        double discount = 0;
        for (ProductDTO productDTO : productsDTO) {
            discount += productDTO.getDiscount();
        }
        return discount;
    }



}
