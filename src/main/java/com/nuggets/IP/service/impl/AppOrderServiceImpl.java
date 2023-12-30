package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.OrderNotExistsException;
import com.nuggets.IP.model.AppOrder;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.UserOrder;
import com.nuggets.IP.model.repository.AppOrderRepository;
import com.nuggets.IP.service.AppOrderService;
import com.nuggets.IP.web.rest.request.OrderBody;
import org.hibernate.query.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppOrderServiceImpl implements AppOrderService {

    @Autowired
    private AppOrderRepository appOrderRepository;

    public AppOrderServiceImpl(AppOrderRepository appOrderRepository) {
        this.appOrderRepository = appOrderRepository;
    }


    public List<AppOrder> getOrdersForUser(AppUser user) throws OrderNotExistsException{
        return appOrderRepository.findByAppUser(user);
    }

    @Override
    public List<AppOrder> getAllOrders() throws OrderNotExistsException {
        return appOrderRepository.findAll();
    }

    @Override
    public AppOrder createOrder(OrderBody orderBody) {
        AppOrder appOrder = new AppOrder();
        orderBody.setStatus(orderBody.getStatus());
        orderBody.setQuantity(orderBody.getQuantity());
        return appOrderRepository.save(appOrder);
    }

    @Override
    public AppOrder updateOrder(AppOrder appOrder, OrderBody orderBody) throws OrderNotExistsException {

        Optional<AppOrder> optionalOrder = appOrderRepository.findById(appOrder.getOrderId());
        if (optionalOrder.isPresent()) {
            AppOrder existingOrder = optionalOrder.get();
            existingOrder.setStatus(orderBody.getStatus());
            existingOrder.setQuantity(orderBody.getQuantity());
            return appOrderRepository.save(appOrder);
        } else {

            throw new OrderNotExistsException("Order Not Exsist");
        }
    }

    @Override
    public void deleteOrderById(AppOrder order) {
        appOrderRepository.deleteByOrderId(order.getOrderId());
    }
}
