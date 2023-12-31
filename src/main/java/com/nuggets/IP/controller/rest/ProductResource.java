package com.nuggets.IP.controller.rest;

import com.nuggets.IP.controller.rest.request.ProductBody;
import com.nuggets.IP.exception.ProductDoesNotExistException;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.service.ImageService;
import com.nuggets.IP.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductResource {

    @Autowired
    private ProductService productService;
    @Autowired
    private ImageService imageService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> getAllProducts() {
        try {
            List<Product> products = productService.getAllProducts();
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", products);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public @ResponseBody ResponseEntity<Map<String, Object>> createProduct(@ModelAttribute ProductBody productBody) {
        try {
            Product product = productService.createProduct(productBody);
            product.setImage(imageService.uploadImage(productBody.getImage(), product));
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", product);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> getAllProductsByUserId(@RequestParam("userId") Long userId) {
        try {
            List<Product> products = productService.getProductsBySeller(userId);
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", products);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        } catch (ProductDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public @ResponseBody ResponseEntity<Map<String,Object>> getProductById(@RequestParam("productId") Long productId){
        try {
            Product product = productService.getProductById(productId).orElseThrow(() -> new ProductDoesNotExistException("Product does not exist"));
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", product);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        } catch (ProductDoesNotExistException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
