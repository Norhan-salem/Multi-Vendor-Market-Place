package com.nuggets.IP.model.repository;

import com.nuggets.IP.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {


    Optional<AppUser> findByUsernameIgnoreCase(String username);

    Optional<AppUser> findByEmailIgnoreCase(String email);

    @Query("select a from AppUser a where a.username = ?1")
    Optional<AppUser> findByUsername(String username);
}
