package com.bookstore.payload;

import com.bookstore.model.Book;
import com.bookstore.model.Orders;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class CheckCartResponse {
    public double getTotal() {
		return total;
	}


	public void setTotal(double total) {
		this.total = total;
	}


	public Set<Orders> getOrders() {
		return orders;
	}


	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}


	private double total ;
    Set<Orders> orders;


    public CheckCartResponse(double total, Set<Orders> orders) {
        this.total = total;
        this.orders = orders;
    }
}
