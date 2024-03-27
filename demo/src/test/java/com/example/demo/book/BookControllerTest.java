package com.example.demo.book;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookControllerTest {

    @Test
    void testGetAllBooks() {
        // Create an instance of the controller
        BookController bookController = new BookController();

        // Call the method to get all books
        ResponseEntity responseEntity = bookController.getAllBooks();

        // Check if the response status is OK
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        // Check if the response body is not null and is of type List<Book>
        List<Book> books = (List<Book>) responseEntity.getBody();
        assert books != null;

        // Check if the list of books is not empty
        assert !books.isEmpty();
    }

    @Test
    void testGetThreeRandomBooks() {
        // Create an instance of the controller
        BookController bookController = new BookController();

        // Call the method to get three random books
        ResponseEntity responseEntity = bookController.getThreeRandomBooks();

        // Check if the response status is OK
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        // Check if the response body is not null and is of type List<Book>
        List<Book> randomBooks = (List<Book>) responseEntity.getBody();
        assert randomBooks != null;

        // Check if the list of random books is not empty
        assert !randomBooks.isEmpty();

        // Check if the list contains at most 5 books
        assert randomBooks.size() <= 5;
    }
}
