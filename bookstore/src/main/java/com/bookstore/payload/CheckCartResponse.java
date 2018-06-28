package com.bookstore.payload;

import com.bookstore.model.Book;
import com.bookstore.model.Orders;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class CheckCartResponse {
    private double total ;
    Set<Orders> orders;


    public CheckCartResponse(double total, Set<Orders> orders) {
        this.total = total;
        this.orders = orders;
    }
}
