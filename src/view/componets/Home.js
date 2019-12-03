import React from "react";
import fetchPosts from "../../services/fetchPosts";
import PostCard from "./PostCard";
import posts from "../../data/posts";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts
    };
  }
  render() {
    if (!this.state.posts) {
      return <div>Page is Loading</div>;
    } else {
      return (
        <div id="home">
          <h2>Posts</h2>
          {this.state.posts.map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </div>
      );
    }
  }
  async getPosts() {
    if (posts.length === 0) {
      await fetchPosts();
      this.setState({ posts });
    }
  }
  componentDidMount() {
    this.getPosts();
  }
}

export default Home;
