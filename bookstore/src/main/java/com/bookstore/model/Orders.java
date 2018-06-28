package com.bookstore.model;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Orders {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "users_id")
    private Users user;

    @ColumnDefault(value = "1")
    private int quant;

   // @NotBlank
    @OneToOne(cascade=CascadeType.ALL)
    private Book book;

   // @NotBlank
    private double price;

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public Orders() {
    	
    }
    public Orders(int quant, Book book) {
        this.quant = quant;
        this.book = book;
        this.price = quant*book.getPrice();
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
