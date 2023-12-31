package com.nuggets.IP.service;

import com.nuggets.IP.exception.OrderNotExistsException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.web.rest.request.OrderBody;
import org.hibernate.query.Order;

import java.util.List;
public interface AppOrderService {

    List<AppOrder> getOrdersForUser(AppUser user) throws OrderNotExistsException;
    List<AppOrder> getAllOrders() throws OrderNotExistsException;
    AppOrder createOrder(OrderBody order);
    AppOrder updateOrder(AppOrder order,OrderBody orderBody) throws OrderNotExistsException;

    void deleteOrderById(AppOrder order);
}
