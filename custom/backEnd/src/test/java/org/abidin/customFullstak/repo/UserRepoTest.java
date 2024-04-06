package org.abidin.customFullstak.repo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.abidin.customFullstak.entity.User;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class UserRepoTest {


    @Autowired
    UserRepo userRepo;

    @Test
    void saveUSer() {

        User user=new User();
        user.setName("user");
        user.setPassword("user");

        User savedUser=userRepo.save(user);

        assertThat(savedUser.getId()>0);




    }
}