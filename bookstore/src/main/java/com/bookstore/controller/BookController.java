package com.bookstore.controller;


import com.bookstore.security.CurrentUser;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    BookService bookService;

    @GetMapping
    public ResponseEntity <?> getAllBooks(){
        return bookService.getBooks();
    }

    @GetMapping("/{ISBN}")
    public ResponseEntity<?> getBookDetails(@PathVariable String ISBN){
        return bookService.getBookDetails(ISBN);
    }

}
