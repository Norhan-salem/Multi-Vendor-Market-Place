package com.nuggets.IP.service;

import com.nuggets.IP.exception.ProductDoesNotExistException;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.controller.rest.request.ProductBody;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> getAllProducts();

    Product createProduct(ProductBody productBody) throws IOException;
    List<Product> getProductsBySeller(Long sellerId) throws ProductDoesNotExistException;

    Product update(Product product);

    Optional<Product> getProductById(Long productId);

    List<Product> searchProduct(String keyword) throws ProductDoesNotExistException;
}
