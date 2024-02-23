package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/account")
public class UserAccountController {

    //private UserAccount userAccount;
    
    @PostMapping("/signup")
    public ResponseEntity createAccount(@RequestBody UserAccount userAccount)
    {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        System.out.println(userAccount.getUsername());
        boolean userAdded = databaseConnection.addUser(userAccount.getUsername(), userAccount.getEmail(), userAccount.getPassword());
        if (userAdded) {
            return new ResponseEntity<>(userAccount, HttpStatus.CREATED);
        } else {
            // If the user already exists, return 208 (Already Reported)
            return new ResponseEntity<>("User already exists", HttpStatus.ALREADY_REPORTED);
        }
    }
}
