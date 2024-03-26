package com.example.demo.book;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class BookTest {
    @Test
    void testGetAuthor() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals("Rick Riordan", book.getAuthor());
    }

    @Test
    void testGetBookID() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals(1, book.getBookID());
    }

    @Test
    void testGetBookTitle() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals("Percy Jackson and The Lightning Thief", book.getBookTitle());
    }

    @Test
    void testGetGenreID() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals(1, book.getGenreID());
    }

    @Test
    void testGetImageURL() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals("https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg", book.getImageURL());
    }

    @Test
    void testGetYearMade() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");
        assertEquals(2005, book.getYearMade());
    }

    @Test
    void testToString() {
        Book book = new Book(1, "Percy Jackson and The Lightning Thief", "Rick Riordan", 1, 2005,
                "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg");

        String expectedToString = "Book{id=1, name='Percy Jackson and The Lightning Thief', author=Rick Riordan, genre id=1, year made=2005, image url=https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg}";
        assertEquals(expectedToString, book.toString());
    }

    @Test
    public void testConstructorWithoutBookID() {
        Book book = new Book("Pride and Prejudice", "Jane Austen", 6, 1813,
                "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg");

        assertEquals("Pride and Prejudice", book.getBookTitle());
        assertEquals("Jane Austen", book.getAuthor());
        assertEquals(6, book.getGenreID());
        assertEquals(1813, book.getYearMade());
        assertEquals("https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg", book.getImageURL());
    }

    @Test
    public void testConstructorWithBookID() {
        Book book = new Book(11, "Pride and Prejudice", "Jane Austen", 6, 1813,
                "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg");

        assertEquals(11, book.getBookID());
        assertEquals("Pride and Prejudice", book.getBookTitle());
        assertEquals("Jane Austen", book.getAuthor());
        assertEquals(6, book.getGenreID());
        assertEquals(1813, book.getYearMade());
        assertEquals("https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg", book.getImageURL());
    }
}
