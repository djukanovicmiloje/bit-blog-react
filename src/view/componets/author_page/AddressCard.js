import React from "react";

const AddressCard = ({ author }) => {
  const LATITIUDE = author.address.geo.lat;
  const LONGTITUDE = author.address.geo.lng;
  return (
    <div className="authorCard">
      <div>
        <h1>Address</h1>
        <p>street: {author.address.street}</p>
        <p>city: {author.address.city}</p>
      </div>
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
    </div>
  );
};
export default AddressCard;
