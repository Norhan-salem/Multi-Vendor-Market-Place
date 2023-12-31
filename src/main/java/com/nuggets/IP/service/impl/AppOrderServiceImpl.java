package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.AppOrderDoesNotExistException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.repository.AppOrderRepository;
import com.nuggets.IP.service.AppOrderService;
import com.nuggets.IP.controller.rest.request.OrderBody;
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


    public List<AppOrder> getOrdersForUser(String username) throws AppOrderDoesNotExistException {
        return appOrderRepository.findByAppUser_Username(username);
    }

    @Override
    public List<AppOrder> getAllOrders() throws AppOrderDoesNotExistException {
        return appOrderRepository.findAll();
    }

    @Override
    public AppOrder createOrder(OrderBody orderBody) {
        AppOrder appOrder = new AppOrder();
        appOrder.setStatus(orderBody.getStatus());
        appOrder.setQuantity(orderBody.getQuantity());
        appOrder.setProducts(orderBody.getProducts());
        return appOrderRepository.save(appOrder);
    }

    @Override
    public void updateOrder(long appOrderId, OrderBody orderBody){
        appOrderRepository.updateStatusAndQuantityAndProductsByOrderId(orderBody.getStatus(), orderBody.getQuantity(), orderBody.getProducts(), appOrderId);
    }

    @Override
    public void deleteOrderById(long orderId) {
        appOrderRepository.deleteByOrderId(orderId);
    }
}
