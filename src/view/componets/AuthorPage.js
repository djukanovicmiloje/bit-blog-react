import React from "react";
import getAuthor from "../../services/getAuthor";
import { Link } from "react-router-dom";

const AuthorPage = props => {
  const authorID = props.match.params.id;
  const author = getAuthor(authorID);
  const LATITIUDE = author.address.geo.lat;
  const LONGTITUDE = author.address.geo.lng;
  return (
    <div>
      <Link to="/home">{"< Back"}</Link>
      <h2>{author.name}</h2>
      <p>username: {author.username}</p>
      <p>email: {author.email}</p>
      <p>phone: {author.phone}</p>
      <h2>Address</h2>
      <p>street: {author.address.street}</p>
      <p>city: {author.address.city}</p>
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title={author.address.street}
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://maps.google.com/maps?q=${LATITIUDE},${LONGTITUDE}&z=15&output=embed`}
      />
      <h2>Company</h2>
      <p>name: {author.company.name}</p>
      <p>slogan: {author.company.catchPhrase}</p>
    </div>
  );
};
export default AuthorPage;
