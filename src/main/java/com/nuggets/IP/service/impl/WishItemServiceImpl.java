package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.WishItem;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.model.repository.WishItemRepository;
import com.nuggets.IP.service.WishItemService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishItemServiceImpl implements WishItemService {

    private final WishItemRepository wishItemRepository;
    private final AppUserRepository appUserRepository;

    public WishItemServiceImpl(WishItemRepository wishItemRepository,
                               AppUserRepository appUserRepository) {
        this.wishItemRepository = wishItemRepository;
        this.appUserRepository = appUserRepository;
    }

    @Override
    public void addWishItemToUser(Long userId, Long ProductId) {
        // TODO: implement wishlist adding logic
    }

    @Override
    public void removeWishItemFromUser(String username, Long ProductId) throws AppUserDoesNotExistException{
        AppUser appUser = appUserRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(() -> new AppUserDoesNotExistException("User not found"));
        wishItemRepository.deleteByAppUsers(appUser);
    }

    @Override
    public List<WishItem> getWishItemsByUserId(Long userId) {
        return wishItemRepository.findByAppUsers_UserID(userId);
    }
}
