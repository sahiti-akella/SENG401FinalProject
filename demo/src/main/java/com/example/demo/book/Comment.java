package com.example.demo.book;

public class Comment {
    private int id;
    private String text;
    private String username;
    private long timestamp;

    // Constructor
    public Comment(int id, String text, String username, long timestamp) {
        this.id = id;
        this.text = text;
        this.username = username;
        this.timestamp = timestamp;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
