import React from "react";
import { Link } from "react-router-dom";
import fetchPostsFromSameAuthor from "../../../services/fetchPostsFromSameAuthor";

class MoreFromAuthor extends React.Component {
  constructor({ userId }) {
    super();
    this.userId = userId;
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    } else {
      return (
        <div id="sameAuthor">
          <p>{this.state.posts.length} more posts from same author</p>
          {this.state.posts.map((post, key) => (
            <li key={key}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </div>
      );
    }
  }
  async getPosts() {
    const posts = await fetchPostsFromSameAuthor(this.userId);
    this.setState({ loading: false, posts });
  }
  componentDidMount() {
    this.getPosts();
  }
}

export default MoreFromAuthor;
