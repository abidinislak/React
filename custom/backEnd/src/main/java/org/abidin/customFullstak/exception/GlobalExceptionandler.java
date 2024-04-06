package org.abidin.customFullstak.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionandler {


    public ResponseEntity<ErrorDetails> errorDetailsResponseEntity(CustomException exception, WebRequest webRequest){



        ErrorDetails errorDetails=new ErrorDetails(LocalDateTime.now(), exception.getMessage(), webRequest.getDescription(false));

//        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
        return ResponseEntity.badRequest().body(errorDetails);
    }
}
