package com.example.demo.book;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CommunityTest {

    @Test
    void testGetCommunityID() {
        // Create a Community object
        Community community = new Community(1, "Books Discussion", 2020);

        // Test the getCommunityID method
        assertEquals(1, community.getCommunityID());
    }

    @Test
    void testGetTopic() {
        // Create a Community object
        Community community = new Community(1, "Books Discussion", 2020);

        // Test the getTopic method
        assertEquals("Books Discussion", community.getTopic());
    }

    @Test
    void testGetYearMade() {
        // Create a Community object
        Community community = new Community(1, "Books Discussion", 2020);

        // Test the getYearMade method
        assertEquals(2020, community.getYearMade());
    }
}
