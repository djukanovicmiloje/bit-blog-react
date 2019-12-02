import React from "react";
import getPost from "../../services/getPost";
import { Link } from "react-router-dom";

const MoreFromAuthor = ({ author }) => {
  const numberOfPosts = author.numberOfPosts;
  const posts = author.postList;

  return (
    <div id="sameAuthor">
      <p>{numberOfPosts} more posts from same author</p>
      {posts.map((postID, key) => {
        const post = getPost(postID);
        return (
          <li>
            <Link key={key} to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
export default MoreFromAuthor;
