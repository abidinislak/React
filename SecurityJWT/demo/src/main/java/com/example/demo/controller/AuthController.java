package com.example.demo.controller;


import com.example.demo.dto.JwtAuthResponse;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.Authservice;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {


    private final PasswordEncoder encoder;
    private final UserRepo userRepo;
    private final Authservice authservice;


    @GetMapping("/test")
    public String string()
    {


        return "ankara --> /auth/test";
    }


    @PostMapping ("register")
    public String register(@RequestBody User user){

        User entity=new User();
        entity.setName(user.getName());
        entity.setPassword( (encoder.encode(user.getPassword())));

        User userSaved=userRepo.save(entity);





        return "anakara --->> registwer  USer id: "+userSaved.getId();
    }

    @PostMapping("/login")

    public ResponseEntity<JwtAuthResponse> login(@RequestBody User loginDto) {

        JwtAuthResponse jwtAuthResponse = authservice.login(loginDto);


        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK
        );
    }


}
