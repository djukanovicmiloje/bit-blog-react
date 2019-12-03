import React from "react";
import { Link } from "react-router-dom";
import fetchAuthors from "../../services/fetchAuthors";

class Authors extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    } else {
      return (
        <>
          <h1 id="authors">Authors</h1>
          {this.state.authors.map((author, key) => (
            <p key={key}>
              <Link className="author" to={`/author/${author.id}`}>
                {author.name}
              </Link>
            </p>
          ))}
        </>
      );
    }
  }
  async getAuthors() {
    const authors = await fetchAuthors();
    this.setState({ loading: false, authors });
  }
  componentDidMount() {
    this.getAuthors();
  }
}

export default Authors;
