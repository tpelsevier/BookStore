package com.bookstore.payload;

import javax.validation.constraints.NotBlank;

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
    private Book book;

    private int quantity;
//    @NotBlank
//    private String isbn;
//	public String getIsbn() {
//		return isbn;
//	}
//
//	public void setIsbn(String isbn) {
//		this.isbn = isbn;
//	}


	
}
