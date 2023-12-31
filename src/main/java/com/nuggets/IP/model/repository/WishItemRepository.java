package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.WishItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishItemRepository extends JpaRepository<WishItem, Long> {
    List<WishItem> findByAppUsers_UserID(Long userID);



    List<WishItem> findByAppUsers_Username(String username);

    void deleteByProductId(Long productId);


}
