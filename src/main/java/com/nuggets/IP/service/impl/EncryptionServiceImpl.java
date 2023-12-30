package com.nuggets.IP.service.impl;

import com.nuggets.IP.service.EncryptionService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class EncryptionServiceImpl implements EncryptionService {
    @Value("${bcrypt.salt.rounds}")
    private int saltRounds;

    private String salt;

    @PostConstruct
    public void init() {
        salt = BCrypt.gensalt(saltRounds);
    }

    @Override
    public String encryptPassword(String password) {
        return BCrypt.hashpw(password, salt);
    }

    @Override
    public boolean verifyPassword(String providedPassword, String hash) {
        return BCrypt.checkpw(providedPassword, hash);
    }
}
