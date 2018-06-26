package com.bookstore.controller;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Address;
import com.bookstore.model.Book;
import com.bookstore.model.Orders;
import com.bookstore.model.Users;
import com.bookstore.payload.AddToCartRequest;
import com.bookstore.payload.ApiResponse;
import com.bookstore.payload.CheckCartResponse;
import com.bookstore.payload.CheckoutRequest;
import com.bookstore.repository.AddressRepository;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.security.CurrentUser;
import com.bookstore.security.UserPrincipal;
import com.bookstore.service.CartService;
import com.bookstore.service.UserService;
import jdk.nashorn.internal.ir.RuntimeNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.*;

@RestController
@RequestMapping("/api/shopping")
public class ShoppingController {

    @Autowired
    UserService userService;

    @Autowired
    CartService cartService;

    @Autowired
    AddressRepository addressRepository;

    @GetMapping
    public ResponseEntity<?> getItems(@CurrentUser @Valid UserPrincipal userPrincipal){
        Users user = userService.getUser(userPrincipal.getEmail());
        Set<Orders> orders = user.getOrders();
        double total = 0;
        for(Orders order: orders){
            total += order.getPrice();
        }
        return new ResponseEntity<>(new CheckCartResponse(total,orders),HttpStatus.OK);

    }
    @PostMapping("/addtocart")
    public ResponseEntity<?> addBookToCart(@CurrentUser @Valid  UserPrincipal userPrincipal,
                                    @Valid @RequestBody AddToCartRequest bookRequest){
        Users user = userService.getUser(userPrincipal.getEmail());
        cartService.addOrder(user,bookRequest);
        userService.save(user);
        return new ResponseEntity<>(new ApiResponse(true,"Add book to the cart"), HttpStatus.OK);
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(@CurrentUser @Valid UserPrincipal userPrincipal,
                                      @Valid @RequestBody CheckoutRequest checkoutRequest){
        Users user = userService.getUser(userPrincipal.getEmail());
        Address address = new Address(checkoutRequest.getDoornumber(),
                                        checkoutRequest.getStreetName(),
                                      checkoutRequest.getCity(),
                                      checkoutRequest.getState(),
                                        checkoutRequest.getZipcode());
        if(checkoutRequest.getApt() != null && !checkoutRequest.getApt().isEmpty()){
            address.setApt(checkoutRequest.getApt());
        }

        user.getOrders().clear();
        userService.save(user);
        return new ResponseEntity<>(new ApiResponse(true,"Check out successfully"),HttpStatus.OK);
    }


}

