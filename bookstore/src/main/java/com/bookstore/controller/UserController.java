package com.bookstore.controller;

import com.bookstore.model.OrderHistory;
import com.bookstore.model.Users;
import com.bookstore.payload.ApiResponse;
import com.bookstore.payload.CheckPassword;
import com.bookstore.payload.ModifiedProfile;
import com.bookstore.payload.ProfileResponse;
import com.bookstore.repository.OrderHistoryRepository;
import com.bookstore.security.CurrentUser;
import com.bookstore.security.UserPrincipal;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    OrderHistoryRepository orderHistory;

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@CurrentUser UserPrincipal userPrincipal) {
        Users user = userService.getUser(userPrincipal.getEmail());
        ProfileResponse profileResponse = new ProfileResponse(user.getEmail(),user.getFirstName(),user.getLastName());
        return new ResponseEntity<>(profileResponse,HttpStatus.OK);
    }

    @GetMapping("/orderhistory")
    public ResponseEntity<?> getOrderHistory(@CurrentUser UserPrincipal userPrincipal){
           Users user = userService.getUser(userPrincipal.getEmail());
           List<OrderHistory> orderHistoryList = orderHistory.getAllOrders(user.getId());
           return new ResponseEntity<>(orderHistoryList,HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<?> modifyProfile(@CurrentUser UserPrincipal userPrincipal,
                                           @Valid @RequestBody ModifiedProfile modifiedProfile){

        if(!checkPassword(modifiedProfile,userPrincipal)) {
            return new ResponseEntity<>(new ApiResponse(false,"Invalid password enter"),HttpStatus.OK);
        }
        Users user = userService.getUser(userPrincipal.getEmail());
        if(modifiedProfile.getFirstName() != null && !StringUtils.isEmpty(modifiedProfile.getFirstName())){
            user.setFirstName(modifiedProfile.getFirstName());
        }
        if(modifiedProfile.getLastName() != null && !StringUtils.isEmpty(modifiedProfile.getLastName())){
            user.setLastName(modifiedProfile.getLastName());
        }
        if (modifiedProfile.getEmail() != null && !StringUtils.isEmpty(modifiedProfile.getEmail())) {
            user.setEmail(modifiedProfile.getEmail());
        }
        if(modifiedProfile.getPassword() != null && !StringUtils.isEmpty(modifiedProfile.getPassword())){
            user.setPassword(modifiedProfile.getPassword());
        }

        userService.save(user);
        return new ResponseEntity<>(new ApiResponse(true,"User modifed successfully"),HttpStatus.OK);
    }

    @PostMapping("/checkPassword")
    public ResponseEntity<?> checkPassword(@CurrentUser UserPrincipal userPrincipal,
                                           @Valid @RequestBody CheckPassword checkPassword){
        Users user = userService.getUser(userPrincipal.getEmail());
        if(!passwordEncoder.matches(checkPassword.getPassword(),user.getPassword())) {
            return new ResponseEntity<>(new ApiResponse(    false,"Invalid password enter"),HttpStatus.OK);
        }
        return new ResponseEntity<>(new ApiResponse(true,"Correct password enter"),HttpStatus.OK);
    }
    private boolean checkPassword(ModifiedProfile modifiedProfile,UserPrincipal userPrincipal){
        Users user = userService.getUser(userPrincipal.getEmail());
        if(!passwordEncoder.matches(modifiedProfile.getOldPassword(),user.getPassword())) {
            return false;
        }
        return true;
    }

}
