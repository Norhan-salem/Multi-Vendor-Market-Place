package com.nuggets.IP.service;

import com.nuggets.IP.model.Product;
import com.nuggets.IP.web.rest.request.ProductBody;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();

    Product createProduct(ProductBody productBody);
}
