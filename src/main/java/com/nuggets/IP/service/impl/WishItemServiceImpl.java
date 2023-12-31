package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppUserDoesNotExistException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.WishItem;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.model.repository.WishItemRepository;
import com.nuggets.IP.service.WishItemService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public void addWishItemToUser(String username, Long ProductId) throws AppUserDoesNotExistException{
        Optional<AppUser> appUser = appUserRepository.findByUsernameIgnoreCase(username);
        if (appUser.isPresent()) {
            WishItem wishItem = new WishItem();
            wishItem.getAppUsers().add(appUser.get());
            wishItem.setProductId(ProductId);
            wishItemRepository.save(wishItem);
        }
        else {
            throw new AppUserDoesNotExistException("No User Found");
        }
    }

    @Override
    public void removeWishItemFromUser(String username, Long ProductId) throws AppUserDoesNotExistException{
        AppUser appUser = appUserRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(() -> new AppUserDoesNotExistException("User not found"));
        appUser.getWishItems().removeIf(wishItem -> wishItem.getProductId().equals(ProductId));
    }

    @Override
    public List<WishItem> getWishItemsByUsername(String username) throws AppUserDoesNotExistException{
        return wishItemRepository.findByAppUsers_Username(username);
    }
}
