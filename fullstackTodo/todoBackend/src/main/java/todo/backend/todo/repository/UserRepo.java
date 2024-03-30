package todo.backend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todo.backend.todo.entity.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {


    Optional<User> findByUsername(String username);

    Boolean existsByEmail(String email);

    Boolean existsByUsername(String username);

    Optional<User> findByUsernameOrEmail(String username, String email);
}
