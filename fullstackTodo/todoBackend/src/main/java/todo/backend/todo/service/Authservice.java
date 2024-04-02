package todo.backend.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import todo.backend.todo.dto.JwtAuthResponse;
import todo.backend.todo.dto.LoginDto;
import todo.backend.todo.dto.RegisterDto;
import todo.backend.todo.entity.Roles;
import todo.backend.todo.entity.User;
import todo.backend.todo.exception.ResourceNotFound;
import todo.backend.todo.exception.TodoApiException;
import todo.backend.todo.repository.RoleRepo;
import todo.backend.todo.repository.UserRepo;
import todo.backend.todo.security.JwtTokenProvider;

import java.util.HashSet;
import java.util.Set;

@Service
//@AllArgsConstructor
public class Authservice {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private RoleRepo roleRepo;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    public String register(RegisterDto registerDto) {


        if (userRepo.existsByUsername(registerDto.getUsername())) {

            throw new TodoApiException(HttpStatus.BAD_REQUEST, "user already ");
        }


        if (userRepo.existsByEmail(registerDto.getEmail())) {

            throw new TodoApiException(HttpStatus.BAD_REQUEST, "user eiaml alredy exist");
        }

        User user = new User();

        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(encoder.encode(registerDto.getPassword()));


        Set<Roles> rolesSet = new HashSet<>();
        Roles roles = roleRepo.findByName("ROLE_USER");

        rolesSet.add(roles);


        user.setRoles(rolesSet);


        userRepo.save(user);

        return "succelful saved";
    }


    public JwtAuthResponse login(LoginDto loginDto) {


        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsernameOrEmail(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);


        User logged = userRepo.findByUsernameOrEmail(loginDto.getUsernameOrEmail(), loginDto.getUsernameOrEmail()).orElseThrow(() -> new ResourceNotFound("user not foun"));

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setRole(logged.getRoles().stream().findFirst().get().getName());
        jwtAuthResponse.setAccessToken(token);


        return jwtAuthResponse;
    }
}
