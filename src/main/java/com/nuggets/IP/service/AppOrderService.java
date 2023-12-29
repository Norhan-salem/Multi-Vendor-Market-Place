package com.nuggets.IP.service;

import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;

import java.util.List;

public interface AppOrderService {

    List<AppOrder> getOrdersForUser(AppUser user);
}
