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

    @PostMapping("/create")
    public @ResponseBody ResponseEntity<Map<String, Object>> createProduct(@RequestBody ProductBody productBody) {
        try {
            Product product = productService.createProduct(productBody);
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", product);
//            responseMap.put("result", "Product created successfully");
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
//            return ResponseEntity.ok(responseMap);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
