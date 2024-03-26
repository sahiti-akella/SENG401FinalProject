package com.example.demo.book;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserAccountTest {

    @Test
    void testGetEmail() {
        // Create a UserAccount object
        UserAccount userAccount = new UserAccount("john_doe", "john@example.com");

        // Test the getEmail method
        assertEquals("john@example.com", userAccount.getEmail());
    }

    @Test
    void testGetUsername() {
        // Create a UserAccount object
        UserAccount userAccount = new UserAccount("john_doe", "john@example.com");

        // Test the getUsername method
        assertEquals("john_doe", userAccount.getUsername());
    }
}
