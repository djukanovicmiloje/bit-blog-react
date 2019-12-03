import React from "react";

const CompanyCard = ({ author }) => (
  <div className="authorCard">
    <div>
      <h1>Company</h1>
      <p>name: {author.company.name}</p>
      <p>slogan: {author.company.catchPhrase}</p>
    </div>
  </div>
);
export default CompanyCard;
