package com.example.demo.entity;


import com.example.demo.util.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="USer")
@Getter
@Setter
public class User {


    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String password;

    private Role role;

}
