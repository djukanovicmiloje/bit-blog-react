import React from "react";
import fetchPosts from "../../../services/fetchPosts";
import PostCard from "../PostCard";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  render() {
    if (this.state.loading) {
      return <div>Page is Loading</div>;
    }

    return (
      <div id="home">
        <h2>Posts</h2>
        {this.state.posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    );
  }

  async getPosts() {
    const posts = await fetchPosts();
    this.setState({ posts, loading: false });
  }

  componentDidMount() {
    this.getPosts();
  }
}

export default Home;
