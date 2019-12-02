import React from "react";
import { Link } from "react-router-dom";
import getPost from "../../services/getPost";
import "./PostPage.css";
import MoreFromAuthor from "./MoreFromAuthor";
const PostPage = props => {
  const postID = props.match.params.id;

  const post = getPost(postID);

  return (
    <div id="postPage">
      <h2>{post.title}</h2>
      <Link to={`/author/${post.author.id}`}>{post.author.name}</Link>
      <p>{post.content}</p>
      <MoreFromAuthor author={post.author} />
    </div>
  );
};

export default PostPage;
