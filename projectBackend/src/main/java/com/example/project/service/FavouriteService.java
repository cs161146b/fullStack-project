package com.example.project.service;

import com.example.project.Repository.FavouriteRepository;
import com.example.project.entity.Favourite;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavouriteService {

    private final FavouriteRepository favouriteRepository;

    public FavouriteService(FavouriteRepository favouriteRepository) {
        this.favouriteRepository = favouriteRepository;
    }

    public List<Favourite> getUserFavourites(String username) {
        return favouriteRepository.findByUsername(username);
    }
}
