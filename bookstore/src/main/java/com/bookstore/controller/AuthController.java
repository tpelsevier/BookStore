package com.bookstore.controller;

import com.bookstore.exception.AppException;
import com.bookstore.model.Role;
import com.bookstore.model.RoleName;
import com.bookstore.model.Users;
import com.bookstore.payload.ApiResponse;
import com.bookstore.payload.JwtAutehnticationResponse;
import com.bookstore.payload.LoginRequest;
import com.bookstore.payload.SignUpRequest;
import com.bookstore.repository.RoleRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest){
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            return new ResponseEntity<>(new ApiResponse(false,"User Name is already taken")
                                        ,HttpStatus.BAD_REQUEST);
        }
        Users users = new Users(signUpRequest.getFirstName(),signUpRequest.getLastName(),signUpRequest.getEmail(),signUpRequest.getPassword());
        users.setPassword(passwordEncoder.encode(users.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User role not set"));

        Users result = userRepository.save(users);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{userid}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true,"User sign up successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticatUser(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAutehnticationResponse(jwt));
    }
}
