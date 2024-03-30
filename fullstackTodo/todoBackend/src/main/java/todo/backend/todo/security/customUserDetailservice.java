package todo.backend.todo.security;

import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import todo.backend.todo.entity.User;
import todo.backend.todo.repository.UserRepo;

import java.util.Set;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class customUserDetailservice implements UserDetailsService {


    private final UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String usernameOremail) throws UsernameNotFoundException {

        User user = userRepo.findByUsernameOrEmail(usernameOremail, usernameOremail).orElseThrow(() -> new UsernameNotFoundException("user not found"));

        Set<GrantedAuthority> authority = user.getRoles().stream().map((role) -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(usernameOremail, user.getPassword(), authority);
    }
}
