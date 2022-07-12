import React from "react";
import { Link } from "react-router-dom";
import "./propertyCards.scss";
export const Property_Card = ({
  name,
  img,
  price,
  rooms,
  bathrooms,
  country,
  address,
  id,
}) => {
  return (
    <div className="property-card">
      <Link to={`/properties/${id}`}>
        <p className="property-card__title">{name}</p>
        <img src={`${img}`} alt={`${name}`} className="property-card__img" />
        <p className="property-card__price">Total: {price} U$D</p>
        <p className="property-card__rooms">Rooms: {rooms}</p>
        <p className="property-card__bathrooms">Bathrooms: {bathrooms}</p>
        <p className="property-card__country">Country: {country}</p>
        <p className="property-card__address"> Address: {address}</p>
      </Link>
    </div>
  );
};