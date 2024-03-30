package todo.backend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todo.backend.todo.entity.Roles;

public interface RoleRepo extends JpaRepository<Roles, Long> {
    Roles findByName(String roleUser);
}
