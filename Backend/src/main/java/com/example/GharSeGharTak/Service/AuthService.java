package com.example.GharSeGharTak.Service;

import com.example.GharSeGharTak.Config.JwtUtil;
import com.example.GharSeGharTak.Model.User;
import com.example.GharSeGharTak.Repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository,JwtUtil jwtUtil){
        this.userRepository=userRepository;
        this.jwtUtil=jwtUtil;
    }

    public String register(User user){
        if(userRepository.existsByEmail(user.getEmail())){
            throw new RuntimeException("Email already exists!");
        }
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
        userRepository.save(user);
        return "Registration Successful!";
    }

    public String login(String email,String password){
        User user=userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("Invalid Credentials!"));
        if(!passwordEncoder.matches(password,user.getPasswordHash())){
            throw new RuntimeException("Invalid Credentials!");
        }
        return jwtUtil.generateToken(email);
    }

}
