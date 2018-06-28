package com.bookstore.model;



import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class OrderHistory {
	
	public OrderHistory() {
		
	}
    @Id
    private Long id;

    @ManyToOne
    private Users user;


    @ElementCollection
    @OneToMany
    List<Orders> orders;

    @NotBlank
    private double price;
    public OrderHistory(List<Orders> orders,double price) {
        this.orders = orders;
        this.price = price;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public List<Orders> getOrders() {
        return orders;
    }

    public void setOrders(List<Orders> orders) {
        this.orders = orders;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
