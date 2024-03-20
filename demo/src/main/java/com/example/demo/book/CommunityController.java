package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/community")
public class CommunityController {
    
    @GetMapping("/allData")
    public ResponseEntity getAllCommunities() {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        ArrayList<Community> communities = new ArrayList<>();
        communities = databaseConnection.getAllCommunities();
        if (communities != null) {
            return new ResponseEntity<>(communities, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addCommunity")
    public ResponseEntity addCommunity(@RequestParam String topic, @RequestParam int yearMade) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        boolean success = databaseConnection.addCommunity(topic, yearMade);
        if (success) {
            return new ResponseEntity<>("Community added successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to add community", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/communityId/{topic}")
    public ResponseEntity<?> getCommunityId(@PathVariable String topic) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        int communityId = databaseConnection.getCommunityIdByTopic(topic);
        if (communityId != -1) {
            return new ResponseEntity<>(Collections.singletonMap("communityId", communityId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addPost/{communityId}")
    public ResponseEntity addPost(@PathVariable int communityId, @RequestParam String post, @RequestParam String author) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        System.out.println(post);
        boolean success = databaseConnection.addPostToCommunity(communityId, post, author);
        if (success) {
            return new ResponseEntity<>("Post added successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to add post", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/comments/{communityId}")
    public ResponseEntity<?> getCommentsByCommunityId(@PathVariable int communityId) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        List<Comment> comments = databaseConnection.getCommentsByCommunityId(communityId);
        if (comments != null) {
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addReply/{commentId}")
    public ResponseEntity addReplyToComment(@PathVariable int commentId, @RequestParam String text, @RequestParam String username) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        boolean success = databaseConnection.addReplyToComment(commentId, text, username);
        if (success) {
            return new ResponseEntity<>("Reply added successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to add reply", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/replies/{commentId}")
    public ResponseEntity<?> getRepliesByCommentId(@PathVariable int commentId) {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        List<Comment> replies = databaseConnection.getRepliesByCommentId(commentId);
        if (replies != null) {
            return new ResponseEntity<>(replies, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
