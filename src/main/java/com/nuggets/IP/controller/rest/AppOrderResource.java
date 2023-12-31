package com.nuggets.IP.controller.rest;

import com.nuggets.IP.exception.AppOrderDoesNotExistException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.service.AppOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class AppOrderResource {
    @Autowired
    private AppOrderService appOrderService;

    public AppOrderResource(AppOrderService appOrderService) {
        this.appOrderService = appOrderService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<Map<String,Object>> getOrdersForUser(
            @RequestParam("username") String username)
            throws AppOrderDoesNotExistException {

        List<AppOrder> orders = appOrderService.getOrdersForUser(username);
        return ResponseEntity.ok(Map.of("result", orders));
    }
}
