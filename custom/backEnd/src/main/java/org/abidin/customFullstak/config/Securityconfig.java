package org.abidin.customFullstak.config;


import lombok.AllArgsConstructor;
import org.abidin.customFullstak.security.JWTAuthenticationfilter;
import org.abidin.customFullstak.security.JwtAuthenticationEntyPoint;
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableMethodSecurity
@AllArgsConstructor
public class Securityconfig {

    private UserDetailsService userDetailsService;
    private JwtAuthenticationEntyPoint jwtAuthenticationEntyPoint;
    private JWTAuthenticationfilter jwtAuthenticationFilter;

//    @Bean
//    public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//
//
//        return authenticationConfiguration.getAuthenticationManager();
//    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {


        httpSecurity.csrf(httpSecurityCsrfConfigurer -> httpSecurityCsrfConfigurer.disable()).authorizeHttpRequests(


                autohorize -> {
//                    autohorize.requestMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN");
//                    autohorize.requestMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "USER");
//                    autohorize.requestMatchers(HttpMethod.PATCH, "/api/**").hasAnyRole("ADMIN", "USER");
//                    autohorize.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
//                    autohorize.requestMatchers(HttpMethod.POST, "/api/auth/**").permitAll();
//                    autohorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
                    autohorize.anyRequest().permitAll();

                    try {
                        httpSecurity.exceptionHandling(excepton -> excepton.authenticationEntryPoint(jwtAuthenticationEntyPoint));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }


                    httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                }
        ).httpBasic(Customizer.withDefaults());

        return httpSecurity.build();
    }
}
