package com.example.GharSeGharTakBackend.repository;

import com.example.GharSeGharTakBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository  extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
//When you search for a user by email, it’s possible that no user exists with that email. Instead of returning null, which can cause NullPointerException, Spring Data JPA allows you to return an Optional.