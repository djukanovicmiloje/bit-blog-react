import React from "react";
import authors from "../../data/authors";
import { Link } from "react-router-dom";

class Authors extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <h2>Authors</h2>
        {authors.map((author, key) => (
          <Link to={`/author/${author.id}`}>
            <p key={key}>
              {author.name} ({author.numberOfPosts} - posts)
            </p>
          </Link>
        ))}
      </>
    );
  }
}

export default Authors;
