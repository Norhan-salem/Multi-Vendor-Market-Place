package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.WishItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishItemRepository extends JpaRepository<WishItem, Long> {
}
