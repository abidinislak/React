package com.example.demo.service;


import com.example.demo.dto.JwtAuthResponse;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class Authservice {

    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;
    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthResponse login (User user ){

        Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getName(),user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);


        User logged = userRepo.findByName(user.getName()).orElseThrow(() -> new RuntimeException("user not foun"));

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setRole(logged.getRole().toString());
        jwtAuthResponse.setAccessToken(token);


        return jwtAuthResponse;

    }
}
