package org.abidin.customFullstak.repo;

import org.abidin.customFullstak.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Long> {
    Optional<User> findByName(String username);
}
