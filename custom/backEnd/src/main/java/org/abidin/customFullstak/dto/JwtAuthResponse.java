package org.abidin.customFullstak.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthResponse {

//    private String accessToken;
//    private String tokeType = "Bearer";
//    private String role;


    private String accessToken;
    private String tokeType="Bearer";
    private String role;

}
