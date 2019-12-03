import React from "react";
import { Link } from "react-router-dom";
import fetchAuthor from "../../../services/fetchAuthor";
class AuthorLink extends React.Component {
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
        <Link id="authorLink" to={`/author/${this.userId}`}>
          {this.state.author.name}
        </Link>
      );
    }
  }
  async getAuthor() {
    const author = await fetchAuthor(this.userId);
    this.setState({ loading: false, author });
  }
  componentDidMount() {
    this.getAuthor();
  }
}
export default AuthorLink;
