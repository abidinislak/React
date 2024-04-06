package org.abidin.customFullstak.controller;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.abidin.customFullstak.dto.RegisterDto;
import org.abidin.customFullstak.entity.User;
import org.abidin.customFullstak.repo.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {


    private final UserRepo userRepo;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){


        User user=new User();
        user.setName(registerDto.getName());
        user.setPassword(registerDto.getPassword());
user.setRole(registerDto.getRole());
        User saved=userRepo.save(user);


        System.err.println(saved.getRole());

        return new ResponseEntity<>("saved", HttpStatus.OK);
    }


    @GetMapping("/test")
    public ResponseEntity<String >test (){


        return ResponseEntity.ok("test Ankara success");
    }
}
