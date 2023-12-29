package com.nuggets.IP.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.service.JWTService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JWTServiceImpl implements JWTService {
    @Value("${jwt.algorithm.key}")
    private String algorithmKey;

    @Value("${jwt.issuer}")
    private String issuer;

    @Value("${jwt.expiration}")
    private int expiration; // in seconds



    private static Algorithm algorithm;

    private static final String USERNAME_CLAIM = "username";

    @PostConstruct
    public void init() {
        algorithm = Algorithm.HMAC256(algorithmKey);
    }

    public String generateJWTToken(AppUser appUser) {
        return JWT.create().withClaim(USERNAME_CLAIM, appUser.getUsername())
                .withIssuer(issuer)
                .withExpiresAt(new java.util.Date(System.currentTimeMillis() + expiration * 1000L))
                .sign(algorithm);
    }

    @Override
    public String getUsernameFromToken(String token) {
        return JWT.require(algorithm).build().verify(token).getClaim(USERNAME_CLAIM).asString();
    }


}
