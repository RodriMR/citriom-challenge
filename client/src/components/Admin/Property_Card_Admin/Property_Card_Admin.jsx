import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Property_Card_Admin = ({
  name,
  img,
  price,
  rooms,
  bathrooms,
  country,
  address,
  id,
}) => {
  const history = useHistory();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      alert("Property deleted succesfully");
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="home">
      {/* <Link to={`/properties/${id}`}> */}
      <img src={`${img}`} alt={`${name}`} className="home__img" />
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <p>
          <span className="home__location--country">{country}</span>
        </p>
      </div>
      <div className="home__rooms">
        <p>Rooms: {rooms}</p>
      </div>
      <div className="home__area">
        <p>Bathrooms: {bathrooms}</p>
      </div>
      <div className="home__price">
        <p>U$D {price}</p>
      </div>
      <div className="home__address">
        <p>
          Address: <br /> {address}
        </p>
      </div>
      <br />

      <a className="btn  btn--edit" href={`/admin/edit/${id}`}>
        Edit
      </a>
      <button className="btn-delete" onClick={handleDelete}>
        Delete
      </button>

      {/* </Link> */}
    </div>
  );
};
