import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <div className="postCard">
    <Link to={`./post/${post.id}`}>
      <h3>{post.title}</h3>
    </Link>
    <p>{post.content.substring(0, 60)}...</p>
  </div>
);

export default PostCard;
