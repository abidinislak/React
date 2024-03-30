package todo.backend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todo.backend.todo.entity.Todo;

public interface TodoRepo extends JpaRepository<Todo,Long> {
}
