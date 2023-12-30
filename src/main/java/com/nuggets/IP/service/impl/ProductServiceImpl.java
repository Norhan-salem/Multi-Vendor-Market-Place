package com.nuggets.IP.service.impl;

import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.repository.ProductRepository;
import com.nuggets.IP.model.repository.SellerRepository;
import com.nuggets.IP.service.ProductService;
import com.nuggets.IP.web.rest.request.ProductBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    private final SellerRepository sellerRepository;

    public ProductServiceImpl(ProductRepository productRepository,
                              SellerRepository sellerRepository) {
        this.productRepository = productRepository;
        this.sellerRepository = sellerRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(ProductBody productBody) {
        Product product = new Product();
        product.setName(productBody.getName());
        product.setDescription(productBody.getDescription());
        product.setPrice(productBody.getPrice());
        product.setQuantity(productBody.getQuantity());
        product.setStatus("Available");
        product.setSeller(sellerRepository.findByUsernameIgnoreCase(productBody.getSellerUsername()).orElse(null));
        return productRepository.save(product);
    }
}
