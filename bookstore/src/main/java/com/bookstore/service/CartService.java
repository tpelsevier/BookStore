package com.bookstore.service;

import com.bookstore.model.Book;
import com.bookstore.model.Orders;
import com.bookstore.model.Users;
import com.bookstore.payload.AddToCartRequest;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.UserRepository;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    UserRepository userRepository;

    public void addOrder(Users user, AddToCartRequest order){
        user.getOrders().add(new Orders(order.getQuantity(),order.getBook()));
        userRepository.save(user);
    }

}
