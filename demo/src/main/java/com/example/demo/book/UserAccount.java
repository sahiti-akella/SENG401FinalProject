package com.example.demo.book;

public class UserAccount {
    private String username;
    private String email;

    public UserAccount(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUsername(){
        return this.username;
    }

    public String getEmail(){
        return this.email;
    }
}
