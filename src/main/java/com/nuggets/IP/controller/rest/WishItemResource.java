package com.nuggets.IP.controller.rest;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.model.repository.WishItemRepository;
import com.nuggets.IP.service.WishItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/wish-item")
@CrossOrigin(origins = "http://localhost:3000")
public class WishItemResource {

    @Autowired
    private final WishItemRepository wishItemRepository;
    @Autowired
    private final WishItemService wishItemService;

    public WishItemResource(WishItemRepository wishItemRepository, WishItemService wishItemService) {
        this.wishItemRepository = wishItemRepository;
        this.wishItemService = wishItemService;
    }

    @PostMapping("/{username}/{productId}")
    public ResponseEntity<Map<String, Object>> addWishItemToUser(@PathVariable("username") String username,
                                                                 @PathVariable("productId") Long productId) throws AppUserDoesNotExistException {
        wishItemService.addWishItemToUser(username, productId);
        return ResponseEntity.ok(Map.of("result", "success"));
    }
    @GetMapping("/{username}")
    public ResponseEntity<Map<String, Object>> getWishItemsByUsername(@PathVariable("username") String username) throws AppUserDoesNotExistException {
        return ResponseEntity.ok(Map.of("result", wishItemService.getWishItemsByUsername(username)));
    }
    @DeleteMapping("/{username}/{productId}")
    public ResponseEntity<Map<String, Object>> removeWishItemFromUser(@PathVariable("username") String username,
                                                                      @PathVariable("productId") Long productId) throws AppUserDoesNotExistException {
        wishItemService.removeWishItemFromUser(username, productId);
        return ResponseEntity.ok(Map.of("result", "success"));
    }

}
