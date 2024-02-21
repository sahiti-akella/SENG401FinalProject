package plotponder.backend;

import java.sql.*;
import java.util.ArrayList;

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

    public ArrayList<Author> getAllAuthors() {
        ArrayList<Author> authors = new ArrayList<>();
        String query = "SELECT AUTHOR_ID, AUTHOR_NAME FROM AUTHOR";

        try (ResultSet resultSet = stmt.executeQuery(query)) {
            while (resultSet.next()) {
                int authorID = resultSet.getInt("AUTHOR_ID");
                String authorName = resultSet.getString("AUTHOR_NAME");

                Author author = new Author(authorID, authorName);

                authors.add(author);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return authors;
    }

    public ArrayList<Genre> getAllGenres() {
        ArrayList<Genre> genres = new ArrayList<>();
        String query = "SELECT ID, GENRE_NAME FROM GENRE";
    
        try (ResultSet resultSet = stmt.executeQuery(query)) {
            while (resultSet.next()) {
                int genreID = resultSet.getInt("ID");
                String genreName = resultSet.getString("GENRE_NAME");

                Genre genre = new Genre(genreID, genreName);

                genres.add(genre);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return genres;
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
    
    public ArrayList<Club> getAllClubs() {
        ArrayList<Club> clubs = new ArrayList<>();
        String query = "SELECT * FROM CLUBS";
    
        try (ResultSet resultSet = stmt.executeQuery(query)) {
            while (resultSet.next()) {
                int clubID = resultSet.getInt("Club_ID");
                String topic = resultSet.getString("Topic");
                int yearMade = resultSet.getInt("Year_Made");
   
                Club club = new Club(clubID, topic, yearMade);
    
                clubs.add(club);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return clubs;
    }    
}

