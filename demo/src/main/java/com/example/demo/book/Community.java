package com.example.demo.book;

public class Community {
    private int communityID;
    private String topic;
    private int yearMade;

    public Community(int communityID, String topic, int yearMade) {
        this.communityID = communityID;
        this.topic = topic;
        this.yearMade = yearMade;
    }

    public int getCommunityID() {
        return this.communityID;
    }

    public String getTopic() {
        return this.topic;
    }

    public int getYearMade() {
        return this.yearMade;
    }
}
