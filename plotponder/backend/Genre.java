package plotponder.backend;

public class Genre {
    private int genreID;
    private String genreName;

    public Genre(int genreID, String genreName){
        this.genreID = genreID;
        this.genreName = genreName;
    }

    public int getGenreID(){
        return this.genreID;
    }

    public String getGenreName(){
        return this.genreName;
    }
}
