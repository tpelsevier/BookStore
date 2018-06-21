package com.qa.restful.controllers;




import com.qa.models.Book;
import com.qa.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@SessionAttributes(names={"books","cart_items","book_counts","filtered_books"})
public class BookRESTfulController {

    /*
        @param ID = book ISPN ID
        API for checking book detail
     */
    @Autowired
    private BookRepository bookRepository;
    @RequestMapping(value = "/book/details/{id}",method = RequestMethod.GET)
    public ResponseEntity<Book> getBookDetail(@PathVariable("id") String bookId){
        Book book = bookRepository.findOne(Integer.parseInt(bookId));
        if(book == null){
            return new ResponseEntity<>(book, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(book,HttpStatus.OK);
    }

    @RequestMapping(value = "/book/{id}/addtoshoppingcart",method = RequestMethod.POST)
    public ResponseEntity<Book> addToShoppingCart(@PathVariable("id") String bookId){
        Book book = bookRepository.findOne(Integer.parseInt(bookId));
        if(book == null){
            return new ResponseEntity<>(book, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new Book(),HttpStatus.OK);
    }

}
