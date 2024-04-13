package com.example.demo.config;


import com.example.demo.security.JwtAuthenticationEntyPoint;
import com.example.demo.security.JwtAuthenticationFilter;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@AllArgsConstructor
public class SecurtiyConfig {

    private JwtAuthenticationEntyPoint jwtAuthenticationEntyPoint;
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean

    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();


    }


@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

httpSecurity.csrf(x->x.disable()).authorizeHttpRequests(x->{


    x.requestMatchers(HttpMethod.GET,"/auth/**").permitAll();
    x.requestMatchers(HttpMethod.POST,"/auth/**").permitAll();
    x.requestMatchers(HttpMethod.GET,"/test/test").permitAll();
    x.anyRequest().authenticated();

            try {
                httpSecurity.exceptionHandling(excepton -> excepton.authenticationEntryPoint(jwtAuthenticationEntyPoint));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }


            httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        }
)
//        ;
//
        .httpBasic(Customizer.withDefaults());

return httpSecurity.build();

    }
}
