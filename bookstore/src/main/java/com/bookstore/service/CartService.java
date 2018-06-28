package com.bookstore.service;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Book;
import com.bookstore.model.Orders;
import com.bookstore.model.Users;
import com.bookstore.payload.AddToCartRequest;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;

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
        Book bookInOrder = bookRepository.findBookByISBN(order.getBook().getIsbn())
                .orElseThrow(()-> new ResourceNotFoundException("Book","ISBN",order.getBook().getIsbn()));
    	Orders orders = new Orders(order.getQuantity(),bookInOrder);
    	
    	System.out.println("order price" + bookInOrder.getPrice());
    	
    	
//        Set<Orders> existed = user.getOrders();
//        boolean ordered = false;
//        for(Orders ex: existed) {
//        	if(ex.getBook().getIsbn() == bookInOrder.getIsbn()) {
//        		ex.setQuant(order.getQuantity());
//        		ordered = true;
//        	}
//        }
//        if(!ordered) existed.add(orders);
    	
    	System.out.println("User details $$$$$$$$$$$$$$$$$$$$$  "+user.getId());
        user.getOrders().add(orders);
        
        
        System.out.println("Number of orders &&&&&&&  "+user.getOrders().size() );
        
        userRepository.save(user);
        orders.setUser(user);
    	orderRepository.save(orders);
        //orders.setUser(user);
        
        
//        for(Orders od : user.getOrders()) {
//        	
//        	od.setUser(user);
//        
//        	orderRepository.save(od);
//        	//userRepository.save(user);
//        }
////        
//       // userRepository.save(user);
        
    }

}
