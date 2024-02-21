package plotponder.backend;

public class Club {
    private int clubID;
    private String topic;
    private int yearMade;

    public Club(int clubID, String topic, int yearMade) {
        this.clubID = clubID;
        this.topic = topic;
        this.yearMade = yearMade;
    }

    public int getClubID() {
        return this.clubID;
    }

    public String getTopic() {
        return this.topic;
    }

    public int getYearMade() {
        return this.yearMade;
    }
}
