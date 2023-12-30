package com.nuggets.IP.web.rest;

import com.nuggets.IP.model.Product;
import com.nuggets.IP.service.ProductService;
import com.nuggets.IP.web.rest.request.ProductBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductResource {

    @Autowired
    private ProductService productService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> createProduct(@RequestBody ProductBody productBody) {
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("result", productService.createProduct(productBody));
        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }
}
