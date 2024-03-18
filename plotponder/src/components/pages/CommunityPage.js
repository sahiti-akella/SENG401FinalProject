// src/CommunityPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Navbar from "../Navbar";
import '../CommunityPage.css';
import { signOut, getAuth } from "firebase/auth";
import axios from 'axios';

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
            /*onClick={() => onDeleteComment(comment.id)}*/>
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

const CommunityPage = ({ props }) => {
    const [communityId, setCommunityId] = useState(null); // State to store the community ID
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [comments, setComments] = useState([]);
    const params = useParams();
    const [newComment, setNewComment] = useState("");
    const [newReply, setNewReply] = useState("");
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [commentModalPostId, setCommentModalPostId] = useState(null);
    const [deleteModalPostId, setDeleteModalPostId] = useState(null);

    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("Current User:", user.email);
          const email = user.email
          const name = user.displayName;
          setDisplayName(name);
          setEmail(email)
        }
      });

      return () => unsubscribe();
    }, []);

      useEffect(() => {
        const fetchCommunityId = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/v1/community/communityId/${params.title}`);
            if (response.data && response.data.communityId) {
              console.log(response.data.communityId)
              setCommunityId(response.data.communityId);
            } else {
              console.error('Community ID not found');
            }
          } catch (error) {
            console.error('Error fetching community ID:', error);
          }
        };
    
        fetchCommunityId(); // Call the function to fetch the community ID
      }, [params.title]); // Trigger the effect when the topic changes

      useEffect(() => {
        const fetchComments = async () => {
          if (communityId) {
            try {
              const response = await axios.get(`http://localhost:8080/api/v1/community/comments/${communityId}`);
              setComments(response.data); // Assuming the data is an array of comments
              console.log(response.data)
            } catch (error) {
              console.error('Error fetching comments:', error);
            }
          }
        };
    
        fetchComments();
      }, [communityId]);
    
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
      
      const handlePostReply = async (commentId, newReply) => {
        if (newReply.trim() !== "") {
          console.log(commentId)
          const username = displayName; // Replace with the actual username
          const timestamp = Date.now();
          //const replyId = Date.now(); // Assign a unique id

          const formData = new FormData();
          formData.append('text', newReply);
          formData.append('username', username);

          try {
            const response = await axios.post(`http://localhost:8080/api/v1/community/addReply/${commentId}`, formData);
            console.log(response.data)
            const { replyId } = response.data;
      
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
                } catch (error){
                  console.error('Error posting reply:', error);
                }
        }
      };
      
    
      const handlePostComment = async () => {
        if (newComment.trim() !== "") {
          const username = displayName; // Replace with the actual username
          const timestamp = Date.now();
          const id = Date.now(); // Assign a unique id

          try {
            const formData = new FormData();
            formData.append('post', newComment);
            formData.append('author', username);
            
            console.log(formData)
            // Send the POST request to your backend API
            const response = await axios.post(`http://localhost:8080/api/v1/community/addPost/${communityId}`, formData);
            console.log(response)
            console.log('Comment added successfully:', response.data);
            
            // Update the comments state to reflect the new comment
            /*const updatedComments = [
              ...comments,
              { id, text: newComment, username, timestamp, commentCount: 0 }
            ];
            setComments(updatedComments);*/
            // Update state with the new comment
            setComments(prevComments => [...prevComments, {
              id: response.data.id,
              text: newComment,
              username: username,
              timestamp,
              commentCount: 0
            }]);
      
            // Reset the newComment state to an empty string
            setNewComment("");
      
            // Update the local storage with the updated comments
            /*localStorage.setItem("comments", JSON.stringify(updatedComments));*/
          } catch (error) {
            console.error('Error adding comment:', error);
          }
        }
      };
    
        /*const handleDeleteComment = async (commentId) => {
          try {
            await axios.delete(`http://localhost:8080/api/v1/community/deleteComment/${commentId}`);
            setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
          } catch (error) {
              console.error('Error deleting comment:', error);
          }
        };*/
    return (
        <div> 
          <Navbar />
          <div className="div">
          <div className="div-2"></div>
          <div className="title">
            <h1>{params.title}</h1>
          </div>
          <div className="browse-clubs-link"> 
        <Link to="/Community"> {"\u2190"}Browse Clubs</Link>
      </div>
          <div className="comments-and-club-navigator">
            <div className="div-12">
              <div className="column">
                <div className="posts-box">
                  {comments.map((comment, index) => (
                    <Comment
                        key={comment.id}
                        comment={{ ...comment, replies: comment.replies || [] }}
                        //onDeleteComment={handleDeleteComment}
                        onToggleReplies={handleToggleReplies}
                        onPostReply={handlePostReply}
                        onDeleteReply={(replyId) => handleDeleteReply(comment.id, replyId)}
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
            </div>
          </div>
        </div>
        </div>
       
      );
};

export default CommunityPage;
