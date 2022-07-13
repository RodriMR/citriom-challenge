import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const Property_Edit_Admin = () => {
  const selectRef = useRef();
  const { id } = useParams();
  const [errors, setErrors] = useState(false);
  const [property, setProperty] = useState({
    name: "",
    img: "",
    price: "",
    rooms: "",
    bathrooms: "",
    country: "",
    address: "",
  });

  const fetchPropertyById = async () => {
    let fetchedProperty = await axios.get(
      `http://localhost:3001/properties/${id}`
    );

    setProperty(fetchedProperty.data[0]);
  };

  function validate(input) {}
  //En el submit parseamos la info para tener cohesion de datos con el back
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, img, price, rooms, bathrooms, country, address } = property;
    try {
      await axios.put(`http://localhost:3001/properties/update/${id}`, {
        name: name,
        img: img,
        price: parseInt(price),
        rooms: parseInt(rooms),
        bathrooms: parseInt(bathrooms),
        country: country,
        address: address,
      });
      alert(`Property "${name}" edited  succesfully`);
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...property,
        [e.target.name]: e.target.value,
      })
    );
  };
  useEffect(() => {
    fetchPropertyById();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={property.name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={property.img}
          onChange={handleChange}
          placeholder="Image"
          name="img"
        />
        <label htmlFor="">Image</label>
        <input
          type="text"
          value={property.price}
          onChange={handleChange}
          placeholder="Price"
          name="price"
        />
        <label htmlFor="">Price</label>
        <input
          type="text"
          value={property.rooms}
          onChange={handleChange}
          placeholder="Rooms"
          name="rooms"
        />
        <label htmlFor="">Rooms</label>
        <input
          type="text"
          value={property.bathrooms}
          onChange={handleChange}
          placeholder="Bathrooms"
          name="bathrooms"
        />
        <label htmlFor="">Bathrooms</label>
        <input
          type="text"
          value={property.country}
          onChange={handleChange}
          placeholder="Country"
          name="country"
        />
        <label htmlFor="">Country</label>
        <input
          type="text"
          value={property.address}
          onChange={handleChange}
          placeholder="Address"
          name="address"
        />
        <label htmlFor="">Address</label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
