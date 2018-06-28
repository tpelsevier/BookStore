package com.bookstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.bookstore.model.Orders;

public interface OrderRepository extends CrudRepository<Orders, Long> {
}
