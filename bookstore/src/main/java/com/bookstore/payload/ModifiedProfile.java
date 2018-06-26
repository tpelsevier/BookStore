package com.bookstore.payload;

import javax.validation.constraints.Email;

public class ModifiedProfile {
    private String firstName;
    private String lastName;

    @Email
    private String email;

    private String password;
    private String oldPassword;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getOldPassword(){
        return oldPassword;
    }
    public void setOldPassword(String oldPassword){
        this.oldPassword = oldPassword;
    }

}
