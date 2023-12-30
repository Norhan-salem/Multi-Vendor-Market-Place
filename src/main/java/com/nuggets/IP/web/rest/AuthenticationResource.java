package com.nuggets.IP.web.rest;


import com.nuggets.IP.exception.AppUserAlreadyExistsException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Seller;
import com.nuggets.IP.service.AppUserService;
import com.nuggets.IP.service.LoginService;
import com.nuggets.IP.service.SellerService;
import com.nuggets.IP.web.rest.request.AppUserRegistrationBody;
import com.nuggets.IP.web.rest.request.LoginBody;
import com.nuggets.IP.web.rest.request.SellerRegistrationBody;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthenticationResource {

    @Autowired
    private AppUserService appUserService;
    @Autowired
    private SellerService sellerService;
    @Autowired
    private LoginService loginService;

    @PostMapping("/user-register")
    public @ResponseBody ResponseEntity<Map<String,Object>> userRegister(@Valid @RequestBody AppUserRegistrationBody registrationBody) throws AppUserAlreadyExistsException {
        try {
            AppUser appUser = appUserService.register(registrationBody);

            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", appUser);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (AppUserAlreadyExistsException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

   @PostMapping("/seller-register")
   public @ResponseBody ResponseEntity<Map<String,Object>> sellerRegister(@Valid @RequestBody SellerRegistrationBody registrationBody) throws AppUserAlreadyExistsException {
        try{
            Seller seller = sellerService.register(registrationBody);
            Map<String,Object> responseMap = new HashMap<>();
            responseMap.put("result", seller);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        catch (AppUserAlreadyExistsException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
   @PostMapping("/login")
   public @ResponseBody ResponseEntity<Map<String,Object>> login(@Valid @RequestBody LoginBody loginBody) {
        String jwtToken = loginService.login(loginBody);
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", jwtToken);
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{id}")
//    public @ResponseBody ResponseEntity<Map<String,Object>> deleteUser(@PathVariable("id") Long id) {
//        appUserService.deleteAppUser(id);
//        Map<String,Object> responseMap = new HashMap<>();
//        responseMap.put("result", "User deleted successfully");
//        return new ResponseEntity<>(responseMap, HttpStatus.OK);
//    }
}
