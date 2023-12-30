package com.nuggets.IP.web.rest.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class SellerRegistrationBody extends AppUserRegistrationBody{
    @NotBlank
    @NotNull
    private String location;

    @NotBlank
    @NotNull
    private String neighborhood;

    public void setLocation(String location) {
        this.location = location;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

}
