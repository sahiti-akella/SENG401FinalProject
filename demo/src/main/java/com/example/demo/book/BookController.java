package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/book")
public class BookController {

    @GetMapping("/allData")
    public ResponseEntity getAllBooks(){
        DatabaseConnection databaseConnection = new DatabaseConnection();
        ArrayList<Book> books = new ArrayList<>();
        books = databaseConnection.getAllBooks();
        if (books != null) {
            return new ResponseEntity<>(books, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/random/3")
    public ResponseEntity getThreeRandomBooks(){
        DatabaseConnection databaseConnection = new DatabaseConnection();
        ArrayList<Book> books = new ArrayList<>();
        books = databaseConnection.getAllBooks();
        if (books != null) {
            Collections.shuffle(books);
            List<Book> randomBooks = books.subList(0, Math.min(5, books.size()));
            return new ResponseEntity<>(randomBooks, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
