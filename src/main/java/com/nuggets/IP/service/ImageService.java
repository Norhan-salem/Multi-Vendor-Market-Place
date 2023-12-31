package com.nuggets.IP.service;

import com.nuggets.IP.exception.ImageDoesNotExistException;
import com.nuggets.IP.model.Image;
import com.nuggets.IP.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    Image uploadImage(MultipartFile image, Product product) throws IOException;
    Image getInfoOfImageByName(String name) throws ImageDoesNotExistException;
    byte[] getImage(String name) throws ImageDoesNotExistException;

    byte[] getImageByProductId(Long productId) throws ImageDoesNotExistException;
}
