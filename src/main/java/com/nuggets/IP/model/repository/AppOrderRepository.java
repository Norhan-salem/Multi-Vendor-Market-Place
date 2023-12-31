package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppOrderRepository extends JpaRepository<AppOrder, Long> {

    List<AppOrder> findByAppUser(AppUser user);

//    void deleteByOrderID(Long orderID);

    Optional<AppOrder> findByOrderId(Long orderId);

    long deleteByOrderId(Long orderId);
}
