package com.nuggets.IP.service.impl;

import com.nuggets.IP.exception.ImageDoesNotExistException;
import com.nuggets.IP.model.Image;
import com.nuggets.IP.model.Product;
import com.nuggets.IP.model.repository.ImageRepository;
import com.nuggets.IP.service.ImageService;
import com.nuggets.IP.utils.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    private ImageRepository imageRepository;
    @Override
    public Image uploadImage(MultipartFile image, Product product) throws IOException {
        return imageRepository.save(Image.builder()
                .name(image.getOriginalFilename())
                .type(image.getContentType())
                .imageData(ImageUtil.compressImage(image.getBytes())).product(product).build());
    }

    @Override
    @Transactional
    public Image getInfoOfImageByName(String name) throws ImageDoesNotExistException{
        Optional<Image> dbImage = imageRepository.findByName(name);
        if (dbImage.isPresent()) {
            return Image.builder()
                    .name(dbImage.get().getName())
                    .type(dbImage.get().getType())
                    .imageData(ImageUtil.decompressImage(dbImage.get().getImageData()))
                    .build();
        }
        else{
            throw new ImageDoesNotExistException("Image does not exist");
        }
    }

    @Override
    public byte[] getImage(String name) throws ImageDoesNotExistException{
        Optional<Image> dbImage = imageRepository.findByName(name);
        if (dbImage.isPresent()) {
            return ImageUtil.decompressImage(dbImage.get().getImageData());
        }
        else{
            throw new ImageDoesNotExistException("Image does not exist");
        }
    }
}
