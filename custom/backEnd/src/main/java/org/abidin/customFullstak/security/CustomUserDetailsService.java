package org.abidin.customFullstak.security;

import lombok.AllArgsConstructor;
import org.abidin.customFullstak.entity.User;
import org.abidin.customFullstak.repo.UserRepo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service

@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {


    private final UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        User user=userRepo.findByName(username).orElseThrow(()->new RuntimeException("user not foun "));


        Set<GrantedAuthority> authoritySet=new HashSet<>();
        authoritySet.add(new SimpleGrantedAuthority(user.getRole().toString()));



        return new org.springframework.security.core.userdetails.User(username,user.getPassword(),authoritySet);
//        return null;
    }
}
