package com.example.project.dto;


import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Bean;

@Getter
@Setter
public class DataDTO {
    private String homepage;
    private String email;
    private String type;
    private String title;
    private String modified;
    private String description;
}
