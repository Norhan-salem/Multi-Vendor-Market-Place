package com.nuggets.IP.web.rest;

import com.nuggets.IP.exception.OrderNotExistsException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.service.AppOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class AppOrderResource {
    @Autowired
    private AppOrderService appOrderService;

    public AppOrderResource(AppOrderService appOrderService) {
        this.appOrderService = appOrderService;
    }

    @GetMapping
    public List<AppOrder> getOrdersForUser(@AuthenticationPrincipal AppUser user) throws OrderNotExistsException {
        return appOrderService.getOrdersForUser(user);
    }
}
