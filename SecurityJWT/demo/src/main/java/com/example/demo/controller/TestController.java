package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/test")
    public String test(){


        return "ankara ---> test";
    }
    @GetMapping("/forbidden")
    public String forbidden(){


        return "ankara --> forbidden";
    }


    @PostMapping("/test")
    public String fastTest(){


        return "ankara --> fast test";
    }
}
