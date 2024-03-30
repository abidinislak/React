package todo.backend.todo.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
@AllArgsConstructor
public class SecurtiyConfig {

    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {


        return new BCryptPasswordEncoder();
    }

    @Bean

    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();


    }


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {


        httpSecurity.csrf(httpSecurityCsrfConfigurer -> httpSecurityCsrfConfigurer.disable()).authorizeHttpRequests(


                autohorize -> {
//                    autohorize.requestMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "USER");
//                    autohorize.requestMatchers(HttpMethod.PATCH, "/api/**").hasAnyRole("ADMIN", "USER");
//                    autohorize.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
                    autohorize.requestMatchers(HttpMethod.POST, "/api/auth/**").permitAll();
                    autohorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
                    autohorize.anyRequest().authenticated();
                }
        ).httpBasic(Customizer.withDefaults());

        return httpSecurity.build();
    }


//    @Bean
//    UserDetailsService userDetailsService() {
//        UserDetails abidin = User.builder().username("abidin").password(passwordEncoder().encode("ankara")).roles("USER").build();
//        UserDetails admin = User.builder().username("admin").password(passwordEncoder().encode("admin")).roles("ADMIN").build();
//        return new InMemoryUserDetailsManager(abidin, admin);
//
//
//    }
}
