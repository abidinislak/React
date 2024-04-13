package com.example.demo.repo;

import com.example.demo.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepoTest {


    @Autowired
    UserRepo userRepo;
    @Test
    void name() {

        User user=new User();
        user.setName("ankara");
        user.setPassword("ankara");

        User userSaved=userRepo.save(user);

        assertThat(userSaved.getId()>0);
    }
}