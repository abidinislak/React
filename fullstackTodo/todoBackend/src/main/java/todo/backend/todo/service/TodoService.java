package todo.backend.todo.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todo.backend.todo.dto.TodoDto;
import todo.backend.todo.entity.Todo;
import todo.backend.todo.exception.ResourceNotFound;
import todo.backend.todo.repository.TodoRepo;

import java.util.*;
import java.util.stream.Collectors;

@Service

public class TodoService {
@Autowired
    private TodoRepo todoRepo;


@Autowired
    private ModelMapper modelMapper;


    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }




    public TodoDto getTodo(Long id){


        return modelMapper.map(todoRepo.findById(id).orElseThrow(()->new ResourceNotFound("Todo Not found with id"+id)),TodoDto.class);

    }

    public TodoDto addTodo(TodoDto todoDto)
    {
        Todo todo=modelMapper.map(todoDto,Todo.class);
        Todo savedTodo1=todoRepo.save(todo);
        return  modelMapper.map(savedTodo1,TodoDto.class);

    }


    public List<TodoDto> getALl(){


        List<Todo> allTodos=todoRepo.findAll();



        return allTodos.stream().map(todo->modelMapper.map(todo,TodoDto.class)).collect(Collectors.toList());
    }


    public TodoDto update(TodoDto todoDto,Long id){

Todo todo=todoRepo.findById(id).orElseThrow(()->new ResourceNotFound("Todo not found"+id))
;

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setProcess(todoDto.isProcess());

        Todo savedTodo=todoRepo.save(todo);

        return modelMapper.map(savedTodo,TodoDto.class);
    }



    public void delete(Long id){

        Todo todo=todoRepo.findById(id).orElseThrow(()->new ResourceNotFound("todo not fount"));
        todoRepo.delete(todo);
    }

    public TodoDto complete(Long id) {

        Todo  todo=todoRepo.findById(id).orElseThrow(()->new ResourceNotFound("todo not fond"+id));

        todo.setProcess(Boolean.TRUE);

        Todo saved=todoRepo.save(todo);

        return modelMapper.map(todo,TodoDto.class);



    }

    public TodoDto incomplete(Long id) {
        Todo todo=todoRepo.findById(id).orElseThrow(()->new ResourceNotFound("todo not found with id"+id));


        todo.setProcess(Boolean.FALSE);
        Todo todo1=todoRepo.save(todo);

        return modelMapper.map(todo,TodoDto.class);

    }
}
