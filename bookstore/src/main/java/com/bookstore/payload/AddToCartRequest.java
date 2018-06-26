package com.bookstore.payload;

import com.bookstore.model.Book;

public class AddToCartRequest {
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    private int quantity;
    private Book book;

}
