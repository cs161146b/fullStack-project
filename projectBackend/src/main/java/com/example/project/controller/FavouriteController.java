package com.example.project.controller;

import com.example.project.dto.DataDTO;
import com.example.project.service.ApiService;
import com.example.project.service.FavouriteService;
import com.example.project.entity.Favourite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public class FavouriteController {


    @RestController
    @RequestMapping("/api/data")
    public class Controller {

        @Autowired
        private FavouriteService favouriteService;

        @GetMapping("/{favourite}")
        public List<Favourite> getFavourites(@PathVariable String username){
            return  favouriteService.getUserFavourites(username);
        }


    }

}
