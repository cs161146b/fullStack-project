package com.example.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Favourite {
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String homepage;
    private String email;
    private String type;
    private String title;
    private String modified;
    private String description;
    private boolean favourite;

}
