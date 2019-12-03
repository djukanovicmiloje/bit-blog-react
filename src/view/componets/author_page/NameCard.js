import React from "react";

const NameCard = ({ author }) => (
  <div className="authorCard">
    <img src="https://via.placeholder.com/150" alt="author"></img>
    <div>
      <h1>{author.name}</h1>
      <p>username: {author.username}</p>
      <p>email: {author.email}</p>
      <p>phone: {author.phone}</p>
    </div>
  </div>
);
export default NameCard;
