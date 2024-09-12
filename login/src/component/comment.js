import React, { useEffect, useContext, useRef, useState } from 'react';
import './CommentBox.css';
import './border.css';
import { Usermendata } from './Head';
import axios from 'axios';
import { useParams } from 'react-router';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

const CommentBox = () => {
  let { postid } = useParams();
  const currentuserdata = useContext(Usermendata);
  const [comment, setComment] = useState([]);
  const commentData = useRef();
  const token = localStorage.getItem('token');

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:4000/comments/getdata", {
        params: { postId: parseInt(postid), userId: currentuserdata.usermen.id }
      });
      return response.data.data;
    } catch (error) {
      alert("Error fetching comments");
      return []; 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchComments();
      setComment(data);
    };
    fetchData();
  }, [postid]);

  async function likecomment(cid) {
    let likeicon = document.getElementById(`commentlike${cid}`);
    let color = likeicon.style.color;
    let total = document.getElementById(`totallikeincomment${cid}`);

    if (color === "white") {
      likeicon.style.color = "red";
      total.innerText = parseInt(total.innerText) + 1;

      try {
        await axios.post("http://localhost:4000/comments/commentlike", {
          cid: cid,
          uid: currentuserdata.usermen.id
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch (error) {
        alert("Error liking comment");
      }
    } else {
      likeicon.style.color = "white";
      total.innerText = parseInt(total.innerText) - 1;

      try {
        await axios.delete("http://localhost:4000/comments/deletecommentlike", {
          data: {
            cid,
            uid: currentuserdata.usermen.id
          },
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch (error) {
        alert("Error unliking comment");
      }
    }
  }

  const applyComment = async () => {
    const text = commentData.current.value.trim();
    if (text) {
      try {
        await axios.post("http://localhost:4000/comments/pcomment", {
          post: parseInt(postid),
          uid: currentuserdata.usermen.id,
          text
        });
        const updatedComments = await fetchComments();
        setComment(updatedComments);
        commentData.current.value = ""; // Clear input field after posting
      } catch (error) {
        alert("Error posting comment");
      }
    }
  };

  async function deletecommnet(commnetid) {
    
    try {
      await axios.delete("http://localhost:4000/comments/deletecomment", {
        data: { commnetid }
      });

      const updatedComments = await fetchComments();
      setComment(updatedComments);

      
    } catch (error) {
      console.log(error);
      alert("Error in deleting comment");
    }
  }

  return (
    <div className="comment-section form-container d-flex justify-content-center" style={{ height: '100vh' }}>
      <div style={{ width: '80vw', height: "80vh" }}>
        <h1 className="comment-title form-container text-white d-flex justify-content-center">
          <h2>Comments</h2>
        </h1>
        <div className="comment-box form-container">
          {comment.length > 0 ? (
            comment.map(data => (
              <div className='form-container bg-danger' id={`fullcommetdata${data.commnetid}`} key={data.commnetid}>
                <div className="comments" style={{ backgroundColor: "black" }}>
                  <img src={data['user.profilepic']} alt={data['user.username']} className="user-image" />
                  <div className="comment-content">
                    <strong>{data['user.username']}</strong> <br />
                    {data.commentText}
                  </div>
                </div>
                <div className='d-flex justify-content-evenly bg-black' style={{ width: "100%" }}>
                  <div className="like-button t-white">
                    <span id={`totallikeincomment${data.commnetid}`} style={{ marginRight: "10px" }}>{data.totallikes}</span>
                    <Favorite id={`commentlike${data.commnetid}`} style={{ color: data.isLiked ? "red" : "white", marginRight: "10px" }} onClick={() => likecomment(data.commnetid)} />
                    <span style={{ color: "red" }}>Like</span>
                  </div>
                  <div className="like-button mt-1">
                    {data.userId === currentuserdata.usermen.id ? (
                      <div onClick={() => deletecommnet(data.commnetid)}>
                        <DeleteIcon /> Delete
                      </div>
                    ) : (
                      <div>
                        <ReplyIcon /> Reply
                      </div>
                    )}
                  </div>
                  <div>
                    <VisibilityIcon style={{ color: "aqua" }} /> See Reply
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ height: "80vh", width: "100%", fontSize: "40px", fontWeight: "lighter", pointerEvents: "none" }} className='d-flex justify-content-center align-items-center'>
              No comments
            </div>
          )}
        </div>
        <div className="comment-input form-container">
          <input type="text" placeholder="Add a comment..." ref={commentData} className='form-container' />
          <button onClick={applyComment}><i className="fas fa-paper-plane"></i> Post</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
