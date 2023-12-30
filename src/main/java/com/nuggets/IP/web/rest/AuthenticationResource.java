package com.nuggets.IP.web.rest;


import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.service.AppUserService;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import com.nuggets.IP.web.rest.request.LoginBody;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationResource {


    AppUserService appUserService;

    @PostMapping("/user-register")
    public @ResponseBody ResponseEntity<Map<String,Object>> userRegister(@Valid @RequestBody AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException {
        AppUser appUser = appUserService.register(registrationBody);
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", appUser);
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }
    @PostMapping("/login")
    public @ResponseBody ResponseEntity<Map<String,Object>> login(@Valid @RequestBody LoginBody loginBody) {
        String jwtToken = appUserService.login(loginBody);
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", jwtToken);
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }
}
