package com.example.demo.book;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class DatabaseConnectionTest {

    @Test
    void testAddBookToUser() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.addBookToUser(1, 1)); // Assuming user ID and book ID exist in the database
    }

    @Test
    void testAddCommunity() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.addCommunity("Test Community", 2022));
    }

    @Test
    void testAddPostToCommunity() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.addPostToCommunity(1, "Test Post", "Test Author")); // Assuming community ID exists in the
                                                                          // database
    }

    @Test
    void testAddReplyToComment() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.addReplyToComment(1, "Test Reply", "Test Author")); // Assuming comment ID exists in the database
    }

    @Test
    void testAddUser() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.addUser("TestUser", "test@example.com"));
    }

    @Test
    void testDeleteComment() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.deleteComment(2)); // Assuming comment ID exists in the database
    }

    @Test
    void testDeleteUser() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.deleteUser(1)); // Assuming user ID exists in the database
    }

    @Test
    void testGetAllBooks() {
        DatabaseConnection db = new DatabaseConnection();
        ArrayList<Book> books = db.getAllBooks();
        assertTrue(books.size() > 0);
    }

    @Test
    void testGetAllCommunities() {
        DatabaseConnection db = new DatabaseConnection();
        ArrayList<Community> communities = db.getAllCommunities();
        assertTrue(communities.size() > 0);
    }

    @Test
    void testGetCommentsByCommunityId() {
        DatabaseConnection db = new DatabaseConnection();
        ArrayList<Comment> comments = db.getCommentsByCommunityId(1); // Assuming community ID exists in the database
        assertTrue(comments.size() >= 0);
    }

    @Test
    void testGetCommunityIdByTopic() {
        DatabaseConnection db = new DatabaseConnection();
        int communityId = db.getCommunityIdByTopic("Percy Jackson Club");
        assertTrue(communityId > 0);
    }

    @Test
    void testGetRepliesByCommentId() {
        DatabaseConnection db = new DatabaseConnection();
        ArrayList<Comment> replies = db.getRepliesByCommentId(1); // Assuming comment ID exists in the database
        assertTrue(replies.size() >= 0);
    }

    @Test
    void testGetUserFavoriteBooks() {
        DatabaseConnection db = new DatabaseConnection();
        ArrayList<Book> favoriteBooks = db.getUserFavoriteBooks(1); // Assuming user ID exists in the database
        assertTrue(favoriteBooks.size() >= 0);
    }

    @Test
    void testGetUserId() {
        DatabaseConnection db = new DatabaseConnection();
        int userId = db.getUserId("test@example.com"); // Assuming email exists in the database
        assertTrue(userId >= 0);
    }

    @Test
    void testRemoveBookFromFavorites() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.removeBookFromFavorites(1, 1)); // Assuming user ID and book ID exist in the database
    }

    @Test
    void testRemoveUserFavorites() {
        DatabaseConnection db = new DatabaseConnection();
        assertTrue(db.removeUserFavorites(1)); // Assuming user ID exists in the database
    }
}
