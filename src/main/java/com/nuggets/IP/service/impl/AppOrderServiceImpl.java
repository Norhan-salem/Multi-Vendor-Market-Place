package com.nuggets.IP.service.impl;

import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.repository.AppOrderRepository;
import com.nuggets.IP.service.AppOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppOrderServiceImpl implements AppOrderService {

    @Autowired
    private AppOrderRepository appOrderRepository;

    public AppOrderServiceImpl(AppOrderRepository appOrderRepository) {
        this.appOrderRepository = appOrderRepository;
    }

    public List<AppOrder> getOrdersForUser(AppUser user) {
        return appOrderRepository.findByAppUser(user);
    }
}
