package com.bookstore.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Address {
	
	public Address() {
		
	}

    @GeneratedValue()
    @Id
    private Long id;


    @NotBlank
    private int doornumber;

    private String apt;

    @NotBlank
    private String streetName;

    @NotBlank
    private String city;

    public Address(int doornumber,  String streetName,  String city,  String state, String zipcode) {
        this.doornumber = doornumber;
        this.streetName = streetName;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }

    @NotBlank

    private String state;

    @NotBlank
    private String zipcode;

    public int getDoornumber() {
        return doornumber;
    }

    public void setDoornumber(int doornumber) {
        this.doornumber = doornumber;
    }

    public String getApt() {
        return apt;
    }

    public void setApt(String apt) {
        this.apt = apt;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
}
