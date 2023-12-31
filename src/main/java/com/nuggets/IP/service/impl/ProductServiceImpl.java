package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.ProductDoesNotExistException;
import com.nuggets.IP.model.Image;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.repository.ProductRepository;
import com.nuggets.IP.model.repository.SellerRepository;
import com.nuggets.IP.service.ProductService;
import com.nuggets.IP.controller.rest.request.ProductBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private final SellerRepository sellerRepository;
    @Autowired
    private ImageServiceImpl imageService;

    public ProductServiceImpl(ProductRepository productRepository,
                              SellerRepository sellerRepository,
                              ImageServiceImpl imageService) {
        this.productRepository = productRepository;
        this.sellerRepository = sellerRepository;
        this.imageService = imageService;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(ProductBody productBody) throws IOException {
        Product product = new Product();
        product.setName(productBody.getName());
        product.setDescription(productBody.getDescription());
        product.setPrice(productBody.getPrice());
        product.setQuantity(productBody.getQuantity());
        product.setStatus("Available");
//        Image img = imageService.uploadImage(productBody.getImage());
//        product.setImage(img);
        product.setSeller(sellerRepository.findByUsernameIgnoreCase(productBody.getSellerUsername()).orElse(null));
        return productRepository.save(product);
    }

    @Override
    public List<Product> getProductsBySeller(Long sellerId)  throws ProductDoesNotExistException {
        return productRepository.findBySeller_UserID(sellerId).orElseThrow(() -> new ProductDoesNotExistException("Product does not exist"));
    }

    @Override
    public Product update(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> getProductById(Long productId) {
        return productRepository.findById(productId);
    }
}
