package com.nuggets.IP.service;

import com.nuggets.IP.exception.AppOrderDoesNotExistException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.web.rest.request.OrderBody;

import java.util.List;
public interface AppOrderService {

    List<AppOrder> getOrdersForUser(String username) throws AppOrderDoesNotExistException;
    List<AppOrder> getAllOrders() throws AppOrderDoesNotExistException;
    AppOrder createOrder(OrderBody order);
    void updateOrder(long appOrderId,OrderBody orderBody);

    void deleteOrderById(long orderId);
}
