package com.bookstore.model;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

@Entity
public class Orders {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private Users user;

    @ColumnDefault(value = "1")
    private int quant;

    @NotBlank
    @OneToOne
    private Book book;

    @NotBlank
    private double price;

    public Orders() {
    	
    }
    public Orders(Users user, int quant, Book book) {
        this.quant = quant;
        this.book = book;
        this.price = quant*book.getPrice();
        this.user = user;
    }

    public int getQuant() {
        return quant;
    }

    public void setQuant(int quant) {
        this.quant = quant;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
