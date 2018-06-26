package com.bookstore.repository;

import com.bookstore.model.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends CrudRepository<Book,String> {
    @Override
    Iterable<Book> findAll();
    @Query("from Book where ISBN = :isbn")
    Optional<Book> findBookByISBN(@Param("isbn") String ISBN);
}
