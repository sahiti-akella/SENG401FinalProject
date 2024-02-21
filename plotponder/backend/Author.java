package plotponder.backend;

public class Author {
    private int authorID;
    private String authorName;

    public Author(int authorID, String authorName){
        this.authorID = authorID;
        this.authorName = authorName;
    }

    public int getAuthorID(){
        return this.authorID;
    }

    public String getAuthorName(){
        return this.authorName;
    }
}
