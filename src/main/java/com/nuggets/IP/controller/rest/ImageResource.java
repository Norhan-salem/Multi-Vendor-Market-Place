package com.nuggets.IP.controller.rest;

import com.nuggets.IP.exception.ImageDoesNotExistException;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.service.ImageService;
import com.nuggets.IP.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/image")
@CrossOrigin(origins = "http://localhost:3000")
public class ImageResource {
    @Autowired
    private ImageService imageService;
    @Autowired
    private ProductService prodcutService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> uploadImage(@RequestParam("image") MultipartFile file,
                                                           @RequestParam("productId") Long productId) throws IOException {
        Optional<Product> product = prodcutService.getProductById(productId);
        return ResponseEntity.ok().body(Map.of("image", imageService.uploadImage(file, product.get())));
    }

    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getInfoOfImageByName(@RequestParam("name") String name) throws IOException, ImageDoesNotExistException {
        return ResponseEntity.ok().body(Map.of("image", imageService.getInfoOfImageByName(name)));
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getImage(@RequestParam("name") String name) throws IOException, ImageDoesNotExistException {
        return ResponseEntity.ok().body(Map.of("image", imageService.getImage(name)));
    }
}
