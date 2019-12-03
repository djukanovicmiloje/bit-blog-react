import React from "react";
import "./PostPage.css";
import MoreFromAuthor from "./MoreFromAuthor";
import fetchSinglePost from "../../../services/fetchSinglePost";
import AuthorLink from "./AuthorLink";
import BackLink from "../BackLink";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.id = props.match.params.id;
    console.log(this.props);
  }

  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    } else {
      return (
        <div id="postPage">
          <BackLink />
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.content}</p>
          <AuthorLink userId={this.state.post.userId} />
          <MoreFromAuthor userId={this.state.post.userId} />
        </div>
      );
    }
  }

  async getPost() {
    const post = await fetchSinglePost(this.id);
    this.setState({ loading: false, post });
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate() {
    if (this.id !== this.props.match.params.id) {
      this.id = this.props.match.params.id;
      this.getPost();
    }
  }
}

export default PostPage;
