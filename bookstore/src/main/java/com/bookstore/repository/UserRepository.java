package com.bookstore.repository;

import com.bookstore.model.Book;
import com.bookstore.model.Orders;
import com.bookstore.model.Users;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<Users, Long> {
    Optional<Users> findByEmail(String email);
    Boolean existsByEmail(String email);

    @Query("from Users u left join u.orders where u.id = :user_id")
    Set<Orders> getCartItems(@Param("user_id") Long id);


}
