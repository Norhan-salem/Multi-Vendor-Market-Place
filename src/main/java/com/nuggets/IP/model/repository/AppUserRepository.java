package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {


    Optional<AppUser> findByUsernameIgnoreCase(String username);

    Optional<AppUser> findByEmailIgnoreCase(String email);
}
