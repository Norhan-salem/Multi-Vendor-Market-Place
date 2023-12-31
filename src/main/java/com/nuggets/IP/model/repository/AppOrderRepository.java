package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface AppOrderRepository extends JpaRepository<AppOrder, Long> {

    List<AppOrder> findByAppUser(AppUser user);

    Optional<AppOrder> findByOrderId(Long orderId);

    void deleteByOrderId(Long orderId);

    @Transactional
    @Modifying
    @Query("update AppOrder a set a.status = ?1, a.quantity = ?2, a.products = ?3 where a.orderId = ?4")
    void updateStatusAndQuantityAndProductsByOrderId(String status, Integer quantity, List<Product> products, Long orderId);

    @Query("select a from AppOrder a where a.appUser.username = ?1")
    List<AppOrder> findByAppUser_Username(String username);
}
