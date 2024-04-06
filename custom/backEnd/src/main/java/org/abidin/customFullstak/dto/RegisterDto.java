package org.abidin.customFullstak.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.abidin.customFullstak.util.Role;

@Getter
@Setter
@NoArgsConstructor
public class RegisterDto {

    private Long id;

    private String name;
    private String password;
    private Role role;

}
