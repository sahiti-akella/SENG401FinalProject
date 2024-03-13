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
                int authorID = resultSet.getInt("Author_ID");
                int genreID = resultSet.getInt("Genre_ID");
                int yearMade = resultSet.getInt("Year_Made");
  
                Book book = new Book(bookID, title, authorID, genreID, yearMade);
    
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
                    int authorID = resultSet.getInt("Author_ID");
                    int genreID = resultSet.getInt("Genre_ID");
                    int yearMade = resultSet.getInt("Year_Made");
      
                    Book book = new Book(bookID, title, authorID, genreID, yearMade);
        
                    favoriteBooks.add(book);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return favoriteBooks;
    }

    public static void main(String[] args) {
        DatabaseConnection db =new DatabaseConnection(); 
    }   
}
