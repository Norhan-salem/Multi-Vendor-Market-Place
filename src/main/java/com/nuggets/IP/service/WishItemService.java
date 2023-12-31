package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.WishItem;
import lombok.With;

import java.util.List;

public interface WishItemService {
    void addWishItemToUser(Long userId, Long ProductId);
    void removeWishItemFromUser(String username, Long ProductId) throws AppUserDoesNotExistException;
    List<WishItem> getWishItemsByUserId(Long userId);
}
