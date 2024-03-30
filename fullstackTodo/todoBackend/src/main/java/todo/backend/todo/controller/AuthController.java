package todo.backend.todo.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todo.backend.todo.dto.LoginDto;
import todo.backend.todo.dto.RegisterDto;
import todo.backend.todo.service.Authservice;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {


    private final Authservice authservice;

    @PostMapping("/register")


    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {

        String response = authservice.register(registerDto);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/login")

    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {

        return new ResponseEntity<>(authservice.login(loginDto), HttpStatus.OK
        );
    }

}


