package com.nuggets.IP.service;

public interface EncryptionService {

    String encryptPassword(String password);

    boolean verifyPassword(String providedPassword, String hash);
}
