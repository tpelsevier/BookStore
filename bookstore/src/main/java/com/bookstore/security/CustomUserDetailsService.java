package com.bookstore.security;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Users;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users users = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User name is not found with email:" + email));

        return UserPrincipal.create(users);
    }

    @Transactional
    public UserDetails loadUserById(Long id){
        Users users = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        return UserPrincipal.create(users);
    }
}
