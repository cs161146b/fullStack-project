package com.example.project.service;

import com.example.project.Repository.UserRepository;
import com.example.project.dto.RegisterDTO;
import com.example.project.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {


    private final UserRepository userRepository;


    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(RegisterDTO dto) {


        if (userRepository.findByUsername(dto.getUsername()).isPresent()) {
            throw new RuntimeException("User already exists");
        }

        // 2. δημιουργία entity
        User user = new User();
        user.setUsername(dto.getUsername());

        // 3. hash password (πολύ σημαντικό)
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        userRepository.save(user);

    }
    public String login(RegisterDTO dto){
        Optional<User> optionalUser = userRepository.findByUsername(dto.getUsername());
        if(optionalUser.isEmpty()){
            throw new RuntimeException("User not found");
        }
        User user1 = optionalUser.get();
        if(!passwordEncoder.matches(dto.getPassword(),user1.getPassword())){
            return "Wrong password";
        }
        return "Login succesful";
    }
}
