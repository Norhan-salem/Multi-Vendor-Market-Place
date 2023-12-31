package com.nuggets.IP.controller.rest;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping ("/app-user")
public class AppUserResource {
    @Autowired
    private final AppUserService appUserService;

    public AppUserResource(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<Map<String,Object>> getUserByUsername(@PathVariable("username") String username) throws AppUserDoesNotExistException {
        return ResponseEntity.ok(Map.of("result", appUserService.getUserByUsername(username)));
    }
}
