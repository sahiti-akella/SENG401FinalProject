package com.example.demo.book;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CommunityControllerTest {
    private final DatabaseConnection databaseConnection = new DatabaseConnection();

    @Test
    void testAddCommunity() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.addCommunity("Percy Jackson Club", 2018);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testAddPost() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.addPost(1, "Test Post", "Test Author"); // Assuming community ID exists in
                                                                                     // the database
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testAddReplyToComment() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.addReplyToComment(1, "Test Reply", "Test Author"); // Assuming comment ID
                                                                                                // exists in the
                                                                                                // database
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetAllCommunities() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.getAllCommunities();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetCommentsByCommunityId() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.getCommentsByCommunityId(1); // Assuming community ID exists in the
                                                                          // database
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetCommunityId() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.getCommunityId("Percy Jackson Club");
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetRepliesByCommentId() {
        CommunityController controller = new CommunityController();
        ResponseEntity response = controller.getRepliesByCommentId(1); // Assuming comment ID exists in the database
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
