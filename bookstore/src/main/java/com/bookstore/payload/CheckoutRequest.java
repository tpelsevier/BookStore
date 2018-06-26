package com.bookstore.payload;

import com.bookstore.model.Book;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

public class CheckoutRequest {
    @NotBlank
    private int doornumber;

    private String apt;

    @NotBlank
    private String streetName;

    @NotBlank
    private String city;
    @NotBlank
    private String state;

    @NotBlank
    private String cardHolderName;

    @NotBlank
    private String expirationDate;

    @NotBlank
    private String cv;

    @NotBlank
    @Size(min = 16, max = 16)
    private String cardNumber;

    @NotBlank
    private String zipcode;


    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

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
