package com.example.project.controller;

import com.example.project.dto.RegisterDTO;
import com.example.project.service.FavouriteService;
import com.example.project.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class SignUpController {


    private final UserService userService;

    public SignUpController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterDTO dto){
        userService.register(dto);
        return  ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }


}