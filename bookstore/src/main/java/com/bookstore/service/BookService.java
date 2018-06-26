package com.bookstore.service;

import com.bookstore.exception.ResourceNotFoundException;
import com.bookstore.model.Book;
import com.bookstore.repository.BookRepository;
import org.hibernate.validator.constraints.ISBN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public ResponseEntity<List<Book>> getBooks(){
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(books::add);
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    public ResponseEntity<?> getBookDetails(String ISBN) {
        Book book = bookRepository.findBookByISBN(ISBN)
                .orElseThrow(() -> new ResourceNotFoundException("Book","ISBN",ISBN));

        return new ResponseEntity<>(book,HttpStatus.OK);
    }
}
