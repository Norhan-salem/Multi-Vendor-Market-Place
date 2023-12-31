package com.nuggets.IP.controller.rest;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping ("/app-user")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserResource {
    @Autowired
    private final AppUserService appUserService;

    public AppUserResource(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public ResponseEntity<Map<String,Object>> getUserByUsername(@RequestParam("username") String username) throws AppUserDoesNotExistException {
        System.out.println("username: " + username);
        return ResponseEntity.ok(Map.of("result", appUserService.getUserByUsername(username)));
    }
}
