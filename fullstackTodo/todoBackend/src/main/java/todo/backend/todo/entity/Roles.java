package todo.backend.todo.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "roles")
public class Roles {


    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String name;


}
