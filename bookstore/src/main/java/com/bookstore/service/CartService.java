package com.bookstore.service;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Book;
import com.bookstore.model.Orders;
import com.bookstore.model.Users;
import com.bookstore.payload.AddToCartRequest;
import com.bookstore.repository.BookRepository;
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
    
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    BookRepository bookRepository;

    public void addOrder(Users user, AddToCartRequest order){
        Book bookInOrder = bookRepository.findBookByISBN(order.getBook().getISBN())
                .orElseThrow(()-> new ResourceNotFoundException("Book","ISBN",order.getBook().getISBN()));
    	Orders orders = new Orders(order.getQuantity(),bookInOrder);

        user.getOrders().add(orders);
        userRepository.save(user);
    }

}
