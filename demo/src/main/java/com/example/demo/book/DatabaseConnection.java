package com.example.demo.book;

import java.sql.*;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class DatabaseConnection {
    private Statement stmt;
    private Connection dbConnection;
    private static final String JDBC_URL = "jdbc:mysql://localhost/LIBRARY";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";

    public DatabaseConnection() {
        try {
            this.dbConnection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
            this.stmt = dbConnection.createStatement();
            System.out.println("Connection is not null: " + (dbConnection != null));

        } catch(SQLException ex) {
                ex.printStackTrace();
            }
    }

    public ArrayList<Book> getAllBooks() {
        ArrayList<Book> books = new ArrayList<>();
        String query = "SELECT * FROM BOOKS";
    
        try (ResultSet resultSet = stmt.executeQuery(query)) {
            while (resultSet.next()) {
                int bookID = resultSet.getInt("Book_ID");
                String title = resultSet.getString("Title");
                String author = resultSet.getString("Author");
                int genreID = resultSet.getInt("Genre_ID");
                int yearMade = resultSet.getInt("Year_Made");
                String imageURL = resultSet.getString("ImageURL");
  
                Book book = new Book(bookID, title, author, genreID, yearMade, imageURL);
    
                books.add(book);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return books;
    }

    public boolean addUser(String username, String email) {
        String query = "INSERT INTO USERS (Username, User_Email) VALUES (?, ?)";
    
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            // Set parameters for the query
            preparedStatement.setString(1, username); 
            preparedStatement.setString(2, email);
    
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0; 
            
        } catch (SQLException e) {
            e.printStackTrace();
            return false; 
        }
    }    

    public boolean addBookToUser(int userId, int bookId) {
        String query = "INSERT INTO FAVOURITES (User_ID, Book_ID) VALUES (?, ?)";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            preparedStatement.setInt(1, userId); 
            preparedStatement.setInt(2, bookId);
        
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0; 
                
        } catch (SQLException e) {
            e.printStackTrace();
            return false; 
        }
    }    

    public int getUserId(String email) {
        String query = "SELECT User_ID FROM USERS WHERE User_Email = ?";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            preparedStatement.setString(1, email); 
        
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt("User_ID");
                } else {
                    return -1; // User not found
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return -1; // Error occurred
        }
    }    

    public ArrayList<Book> getUserFavoriteBooks(int userId) {
        ArrayList<Book> favoriteBooks = new ArrayList<>();
        String query = "SELECT b.* FROM BOOKS b INNER JOIN FAVOURITES f ON b.Book_ID = f.Book_ID WHERE f.User_ID = ?";
    
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            preparedStatement.setInt(1, userId);
        
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    int bookID = resultSet.getInt("Book_ID");
                    String title = resultSet.getString("Title");
                    String author = resultSet.getString("Author");
                    int genreID = resultSet.getInt("Genre_ID");
                    int yearMade = resultSet.getInt("Year_Made");
                    String imageURL = resultSet.getString("ImageURL");
      
                    Book book = new Book(bookID, title, author, genreID, yearMade, imageURL);
        
                    favoriteBooks.add(book);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return favoriteBooks;
    }

    public ArrayList<Community> getAllCommunities() {
        ArrayList<Community> communities = new ArrayList<>();
        String query = "SELECT * FROM CLUBS";
    
        try (ResultSet resultSet = stmt.executeQuery(query)) {
            while (resultSet.next()) {
                int clubID = resultSet.getInt("Club_ID");
                String topic = resultSet.getString("Topic");
                int yearMade = resultSet.getInt("Year_Made");
   
                Community club = new Community(clubID, topic, yearMade);
    
                communities.add(club);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return communities;
    } 

    public boolean addCommunity(String topic, int yearMade) {
        String query = "INSERT INTO CLUBS (Topic, Year_Made) VALUES (?, ?)";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            // Set parameters for the query
            preparedStatement.setString(1, topic); 
            preparedStatement.setInt(2, yearMade);
        
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0; 
        } catch (SQLException e) {
            e.printStackTrace();
            return false; 
        }
    } 
    
    public int getCommunityIdByTopic(String topic) {
        String query = "SELECT Club_ID FROM CLUBS WHERE Topic = ?";
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)){
            preparedStatement.setString(1, topic);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt("Club_ID");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        // If community ID is not found, return -1
        return -1;
    }

    public boolean addPostToCommunity(int communityId, String post, String author) {
        String query = "INSERT INTO COMMUNITY_POSTS (Community_ID, Post, Author) VALUES (?, ?, ?)";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            // Set parameters for the query
            preparedStatement.setInt(1, communityId);
            preparedStatement.setString(2, post);
            preparedStatement.setString(3, author);
            
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0; 
        } catch (SQLException e) {
            e.printStackTrace();
            return false; 
        }
    }
    
    public ArrayList<Comment> getCommentsByCommunityId(int communityId) {
        ArrayList<Comment> comments = new ArrayList<>();
        String query = "SELECT * FROM COMMUNITY_POSTS WHERE Community_ID = ?";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            preparedStatement.setInt(1, communityId);
        
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    int postId = resultSet.getInt("Post_ID");
                    String text = resultSet.getString("Post");
                    String author = resultSet.getString("Author");
                    long timestamp = resultSet.getTimestamp("Timestamp").getTime();
        
                    Comment comment = new Comment(postId, text, author, timestamp);
                    comments.add(comment);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return comments;
    }

    public boolean deleteComment(int commentId) {
        String query = "DELETE FROM COMMUNITY_POSTS WHERE POST_ID = ?";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            preparedStatement.setInt(1, commentId);
            
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }    

    public boolean addReplyToComment(int commentId, String text, String username) {
        String query = "INSERT INTO COMMENTS (Post_ID, Comments, Author) VALUES (?, ?, ?)";
        
        try (PreparedStatement preparedStatement = dbConnection.prepareStatement(query)) {
            // Set parameters for the query
            preparedStatement.setInt(1, commentId);
            preparedStatement.setString(2, text);
            preparedStatement.setString(3, username);
            
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    
    

    public static void main(String[] args) {
        DatabaseConnection db =new DatabaseConnection(); 
    }   
}
