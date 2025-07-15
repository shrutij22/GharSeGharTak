package com.example.GharSeGharTakBackend.controller;


import com.example.GharSeGharTakBackend.model.User;
import com.example.GharSeGharTakBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){
        return userService.register(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User loginData) {
        Optional<User> user = userService.login(loginData.getEmail(), loginData.getPassword());
        if (user.isPresent()) {
            return "Login Successful";
        } else {
            return "Invalid credentials";
        }
    }

}
