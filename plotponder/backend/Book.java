package plotponder.backend;

public class Book {
    private int bookID;
    private String title;
    private int authorID;
    private int genreID;
    private int yearMade;

    public Book(int bookID, String title, int authorID, int genreID, int yearMade){
        this.bookID = bookID;
        this.title = title;
        this.authorID = authorID;
        this.genreID = genreID;
        this.yearMade = yearMade;
    }

    public int getBookID(){
        return this.bookID;
    }

    public String getBookTitle(){
        return this.title;
    }

    public int getAuthorID(){
        return this.authorID;
    }

    public int getGenreID(){
        return this.genreID;
    }

    public int getYearMade(){
        return this.yearMade;
    }
}
