package todo.backend.todo.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegisterDto {

    private Long id;

    private String name;
    private String username;
    private String email;
    private String password;

}
