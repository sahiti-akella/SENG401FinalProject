import React, { useState, useEffect } from "react";
import "../Community.css";
import { Link } from 'react-router-dom';

const Reply = ({ reply, onDeleteReply }) => {
    //this controls the comments button on each post
    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString();
    };
  
    return (
      <div className="reply">
        <div className="post-and-reply-title">
          <div className="div-16">
            <div className="post-reply" style={{fontSize:"30px"}}>{reply.text}</div>
            <div className="posted-by">Posted by: u/{reply.username}</div>
          </div>
          <div className="time">{formatTimestamp(reply.timestamp)}</div>
        </div>
        <div className="delete-reply" style={{ cursor: "pointer", fontSize: "30px", width: "20px" }} onClick={() => onDeleteReply(reply.id)}>
        🗑
        </div>
        <hr className="comment-separator" />
      </div>
    );
};

const Comment = ({ comment, onDeleteComment, onToggleReplies, onPostReply, onDeleteReply, setComments}) => {
    const [showReplies, setShowReplies] = useState(false);
    const [newReply, setNewReply] = useState("");

    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString();
    };

    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
        onToggleReplies(comment.id);
    };
      
    const handleDeleteReply = (commentId, replyId) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  replies: comment.replies.filter((reply) => reply.id !== replyId),
                  commentCount: comment.commentCount - 1,
                }
              : comment
          )
        );
      };      
  
    return (
      <div className="comment">
        <div className="post-and-reply-title">
          <div className="div-16">
            <div className="post-reply">{comment.text}</div>
            <div className="posted-by">Posted by: u/{comment.username}</div>
          </div>
          <div className="time">{formatTimestamp(comment.timestamp)}</div>
        </div>
        <div className="post-toolbar">
          <div 
            classname="delete-comment" 
            style={{cursor: "pointer"}}
            onClick={() => onDeleteComment(comment.id)}>
                🗑
          </div>

          <div className="post-toolbar-divider">|</div>

          <div 
            className="replies-button" 
            style={{cursor: "pointer"}} 
            onClick={handleToggleReplies}>
                💬 {comment.commentCount} comments
          </div>
        </div>

        {showReplies && (
        <div className="replies-container">
          {comment.replies.map((reply) => (
            <Reply key={reply.id} reply={reply} onDeleteReply={() => handleDeleteReply(comment.id, reply.id)} />
          ))}

          <div className="reply-textbox">
            <input
              className="type-comment"
              placeholder="Type a reply..."
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)} // Update the input value using setNewReply
            />
            <div
              className="post-button"
              onClick={() => onPostReply(comment.id, newReply)}
            >
              Post Reply
            </div>
          </div>
        </div>
        )}

        <hr className="comment-separator" />
      </div>
    );
};

export default function Community(props) {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [commentModalPostId, setCommentModalPostId] = useState(null);
  const [deleteModalPostId, setDeleteModalPostId] = useState(null);

  const handleToggleReplies = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter((reply) => reply.id !== replyId),
              commentCount: comment.commentCount - 1,
            }
          : comment
      )
    );
  };  
  

  const handlePostReply = (commentId, newReply) => {
    if (newReply.trim() !== "") {
      const username = "YourUsername"; // Replace with the actual username
      const timestamp = Date.now();
      const replyId = Date.now(); // Assign a unique id
  
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: Array.isArray(comment.replies)
                  ? [
                      ...comment.replies,
                      { id: replyId, text: newReply, username, timestamp },
                    ]
                  : [{ id: replyId, text: newReply, username, timestamp }],
                commentCount: comment.commentCount + 1, // Increment comment count
              }
            : comment
        )
      );
  
      setNewReply(""); // Reset the newReply state to an empty string
      setShowCommentModal(false);
    }
  };
  
  
  
  

  

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const username = "YourUsername"; // Replace with the actual username
      const timestamp = Date.now();
      const id = Date.now(); // Assign a unique id
      const updatedComments = [
        ...comments,
        { id, text: newComment, username, timestamp, commentCount: 0 }
      ];
      setComments(updatedComments);
      setNewComment("");

      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };

    const handleDeleteComment = (commentId) => {
        setComments((prevComments) => {
            const updatedComments = prevComments.filter((comment) => comment.id !== commentId);
            localStorage.setItem("comments", JSON.stringify(updatedComments));
            return updatedComments;
        });
    };

  return (
    <div className="div">
      <div className="div-2"></div>
      <div className="title">
        <div className="current-club-title">Club 1</div>
        <div className="your-clubs">Your Clubs</div>
      </div>
      <div className="comments-and-club-navigator">
        <div className="div-12">
          <div className="column">
            <div className="posts-box">
              {comments.map((comment, index) => (
                <Comment
                    key={comment.id}
                    comment={{ ...comment, replies: comment.replies || [] }}
                    onDeleteComment={handleDeleteComment}
                    onToggleReplies={handleToggleReplies}
                    onPostReply={handlePostReply}
                    onDeleteReply={(replyId) => handleDeleteReply(comment.id, replyId)} // Fix here
                    setComments={setComments}
                    setNewReply={setNewReply}
                />
                ))}
                <div className="comment-textbox">
                <input
                    className="type-comment"
                    placeholder="Type something..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <div className="post-button" onClick={handlePostComment}>
                  Post
                </div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="club-navigator">
              <div className="your-clubs-box">
                <div className="Selected-club">Club 1</div>
                <div className="club-2">
                  <div className="joined-clubs">Club 2</div>
                  <div className="go-button">Go →</div>
                </div>
                <div className="club-3">
                  <div className="joined-clubs">Club 3</div>
                  <div className="go-button">Go →</div>
                </div>
                <Link to="/Community/View" className="view-all">View All</Link>
              </div>
              <div className="Explore">Explore </div>
              <div className="Explore-clubs-box">
                <div className="club-4">
                  <div className="join-clubs">Club 4</div>
                  <div className="join-button">Join +</div>
                </div>
                <div className="club-5">
                  <div className="join-clubs">
                    Club 5
                  </div>
                  <div className="join-button">Join +</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
