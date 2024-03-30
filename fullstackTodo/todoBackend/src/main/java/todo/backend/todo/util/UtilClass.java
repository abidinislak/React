package todo.backend.todo.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UtilClass {
    public static void main(String[] args) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        System.err.println(passwordEncoder.encode("ankara"));
        System.err.println(passwordEncoder.encode("admin"));
    }
}
