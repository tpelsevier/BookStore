package com.bookstore.repository;

import com.bookstore.model.OrderHistory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderHistoryRepository extends CrudRepository<OrderHistory,Long> {

    @Query("from OrderHistory oh left join oh.user u where u.id= :id")
    List<OrderHistory> getAllOrders(@Param("id") Long user_id);
}
