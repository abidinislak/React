package todo.backend.todo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import todo.backend.todo.dto.TodoDto;
import todo.backend.todo.service.TodoService;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;


    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {

        TodoDto savedTodo = todoService.addTodo(todoDto);


        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);

    }


    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoid) {


        TodoDto todoDto = todoService.getTodo(todoid);

        return new ResponseEntity<>(todoDto, HttpStatus.ACCEPTED);
    }

    //    @GetMapping("")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>> home() {


        return new ResponseEntity<>(todoService.getALl(), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> update(@RequestBody TodoDto todoDto, @PathVariable("id") Long id) {

        return ResponseEntity.ok(todoService.update(todoDto, id));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {


        todoService.delete(id);


        return ResponseEntity.ok("Delered succefuşy wit id" + id);

    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")

    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> complete(@PathVariable("id") Long id) {


        return ResponseEntity.ok(todoService.complete(id));


    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")

    @PatchMapping("{id}/incomplete")
    public ResponseEntity<TodoDto> incomplete(@PathVariable("id") Long id) {


        TodoDto todoDto = todoService.incomplete(id);

        return ResponseEntity.ok(todoDto);

    }
}
