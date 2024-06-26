package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/account")
public class UserAccountController {

    private final DatabaseConnection databaseConnection;

    //private UserAccount userAccount;

    @Autowired
    public UserAccountController(DatabaseConnection databaseConnection) {
        this.databaseConnection = databaseConnection;
    }
    
    @PostMapping("/signup")
    public ResponseEntity createAccount(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount.getUsername());
        boolean userAdded = databaseConnection.addUser(userAccount.getUsername(), userAccount.getEmail());
        if (userAdded) {
            return new ResponseEntity<>(userAccount, HttpStatus.CREATED);
        } else {
            // If the user already exists, return 208 (Already Reported)
            return new ResponseEntity<>("User already exists", HttpStatus.ALREADY_REPORTED);
        }
    }

    @PostMapping("/addBook")
    public ResponseEntity<Void> addBookToUser(@RequestBody Map<String, Object> requestBody) {
        // Get user email and book ID from the request body
        String userEmail = (String) requestBody.get("userEmail");
        int bookId = (int) requestBody.get("bookID");
        System.out.println(userEmail);

        // Obtain user ID based on email
        int userId = databaseConnection.getUserId(userEmail);
        if (userId != -1) {
            boolean bookAdded = databaseConnection.addBookToUser(userId, bookId);
            if (bookAdded) {
                return new ResponseEntity<>(HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/favorites/{userEmail}")
    public ResponseEntity<List<Book>> getUserFavorites(@PathVariable String userEmail) {
        int userId = databaseConnection.getUserId(userEmail);
        if (userId != -1) {
            List<Book> favoriteBooks = databaseConnection.getUserFavoriteBooks(userId);
            if (!favoriteBooks.isEmpty()) {
                return new ResponseEntity<>(favoriteBooks, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/removeBook/{userEmail}/{bookID}")
    public ResponseEntity<Void> removeBookFromFavorites(@PathVariable String userEmail, @PathVariable int bookID) {
        // Obtain user ID based on email
        int userId = databaseConnection.getUserId(userEmail);
        if (userId != -1) {
            boolean bookRemoved = databaseConnection.removeBookFromFavorites(userId, bookID);
            if (bookRemoved) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @DeleteMapping("/delete/{userEmail}")
    public ResponseEntity<Void> deleteUserAccount(@PathVariable String userEmail) {
        int userId = databaseConnection.getUserId(userEmail);
        if (userId != -1) {
            // First, remove user's favorite books
            boolean favoritesDeleted = databaseConnection.removeUserFavorites(userId);
            if (favoritesDeleted) {
                // Then, delete the user from the database
                boolean userDeleted = databaseConnection.deleteUser(userId);
                if (userDeleted) {
                    return new ResponseEntity<>(HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
