package com.nuggets.IP.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUserDTO {

    private Long userId;

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private String emailAddress;

    private String phoneNumber;


}
