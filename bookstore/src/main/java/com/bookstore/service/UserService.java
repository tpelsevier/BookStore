package com.bookstore.service;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Users;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Users getUser(String email){
        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Users","email",email));
        return user;
    }
    public void save(Users user){
        userRepository.save(user);
    }
}
