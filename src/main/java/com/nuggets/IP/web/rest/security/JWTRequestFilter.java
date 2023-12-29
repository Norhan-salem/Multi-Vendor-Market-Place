package com.nuggets.IP.web.rest.security;

import com.auth0.jwt.exceptions.JWTDecodeException;
import com.nuggets.IP.model.AppUser;
import com.nuggets.IP.model.repository.AppUserRepository;
import com.nuggets.IP.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

@Component
public class JWTRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JWTService jwtService;

    @Autowired
    private AppUserRepository appUserRepository;

    public JWTRequestFilter(JWTService jwtService, AppUserRepository appUserRepository) {
        this.jwtService = jwtService;
        this.appUserRepository = appUserRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
        String jwtToken = request.getHeader("Authorization");
        if (jwtToken != null && jwtToken.startsWith("Bearer ")){
            String token = jwtToken.substring(7);
            try {
                String username = jwtService.getUsernameFromToken(token);
                Optional<AppUser> optionalAppUser = appUserRepository.findByUsernameIgnoreCase(username);
                if (optionalAppUser.isPresent()){
                    AppUser appUser = optionalAppUser.get();
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(appUser,null, new ArrayList<>());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            } catch (JWTDecodeException e) {
                e.printStackTrace();
            }
        }
        filterChain.doFilter(request,response);


    }
}
