package com.example.demo.security;


import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor

public class CustomUserDetailservice  implements UserDetailsService {


    private final UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user=userRepo.findByName(username).orElseThrow(() -> new UsernameNotFoundException("user not found"));

        Set<GrantedAuthority> authority=new HashSet<>();

        authority.add(new SimpleGrantedAuthority(user.getName().toString()));

        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), authority);



    }
}
