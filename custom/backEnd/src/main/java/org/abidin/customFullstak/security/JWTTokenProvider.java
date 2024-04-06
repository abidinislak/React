package org.abidin.customFullstak.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
@Component
public class JWTTokenProvider {

//    @Value("${app.jwt-secret}")
//    private String jwtSecret;
//    @Value("${app.jwt-expiration-milliseconds}")
//    private Long jwtExpirationDate;

    @Value("${app.jwt-secret}")
    private String jwtSecret;
    @Value("${app.jwt-expiratio-milliseconds}")
    private Long jwtExpiration;


    public String generateToken(Authentication authentication) {


        String usernmae = authentication.getName();
        Date expiration = new Date(new Date().getTime() + jwtExpiration);
        String token = Jwts.builder().setSubject(usernmae).setIssuedAt(expiration).signWith(key()).compact();


        return token;
    }


    public Key key() {


        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));

    }

    public String getusername(String token) {

        Claims claims = Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody();


        return claims.getSubject();

    }

    public boolean validateToken(String token) {

        Jwts.parserBuilder().setSigningKey(key()).build().parse(token);
        return true;

    }

}
