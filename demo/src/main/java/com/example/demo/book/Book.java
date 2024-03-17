package com.example.demo.book;

public class Book {
    private int bookID;
    private String title;
    private String author;
    private int genreID;
    private int yearMade;

    public Book(int bookID, String title, String author, int genreID, int yearMade){
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.genreID = genreID;
        this.yearMade = yearMade;
    }

    public Book(String title, String author, int genreID, int yearMade){
        this.title = title;
        this.author = author;
        this.genreID = genreID;
        this.yearMade = yearMade;
    }

    public int getBookID(){
        return this.bookID;
    }

    public String getBookTitle(){
        return this.title;
    }

    public String getAuthor(){
        return this.author;
    }

    public int getGenreID(){
        return this.genreID;
    }

    public int getYearMade(){
        return this.yearMade;
    }

    @Override
    public String toString(){
        return "Book{" +
                "id=" + bookID +
                ", name='" + title + '\'' +
                ", author=" + author +
                ", genre id=" + genreID +
                ", year made=" + yearMade +
                '}';
    }
}
