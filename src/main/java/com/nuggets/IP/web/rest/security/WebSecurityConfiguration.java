package com.nuggets.IP.web.rest.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@SuppressWarnings("removal")
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {

    @Autowired
    private JWTRequestFilter jwtRequestFilter;

    public WebSecurityConfiguration(JWTRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable().cors().disable();

        httpSecurity.addFilterBefore(jwtRequestFilter, AuthorizationFilter.class);
        httpSecurity.authorizeHttpRequests((
                authz) -> authz.requestMatchers("/product").permitAll()
                        .requestMatchers("/auth/**").permitAll()
                        .anyRequest().authenticated())
                        .httpBasic(withDefaults());
        return httpSecurity.build();
    }
}
