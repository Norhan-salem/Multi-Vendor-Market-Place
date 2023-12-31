package com.nuggets.IP.controller.rest.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

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

    @SuppressWarnings("removal")
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors();
        httpSecurity.csrf().disable();
        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        httpSecurity.authorizeHttpRequests((
                authz) -> authz
                        .requestMatchers("/**").permitAll()
                        .anyRequest().authenticated())
                        .httpBasic(withDefaults());
        return httpSecurity.build();
    }
}
