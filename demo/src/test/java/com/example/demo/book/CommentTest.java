package com.example.demo.book;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CommentTest {

    @Test
    void testGetId() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        assertEquals(1, comment.getId());
    }

    @Test
    void testGetText() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        assertEquals("This is a test comment", comment.getText());
    }

    @Test
    void testGetTimestamp() {
        long currentTime = System.currentTimeMillis();
        Comment comment = new Comment(1, "This is a test comment", "user1", currentTime);
        assertEquals(currentTime, comment.getTimestamp());
    }

    @Test
    void testGetUsername() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        assertEquals("user1", comment.getUsername());
    }

    @Test
    void testSetId() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        comment.setId(2);
        assertEquals(2, comment.getId());
    }

    @Test
    void testSetText() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        comment.setText("Updated comment text");
        assertEquals("Updated comment text", comment.getText());
    }

    @Test
    void testSetTimestamp() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        long newTimestamp = System.currentTimeMillis();
        comment.setTimestamp(newTimestamp);
        assertEquals(newTimestamp, comment.getTimestamp());
    }

    @Test
    void testSetUsername() {
        Comment comment = new Comment(1, "This is a test comment", "user1", System.currentTimeMillis());
        comment.setUsername("newUser");
        assertEquals("newUser", comment.getUsername());
    }
}
