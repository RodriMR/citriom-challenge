import React, { useState } from "react";
import axios from "axios";
export const Property_Add_Admin = () => {
  const [input, setInput] = useState({
    name: "",
    img: "",
    price: "",
    rooms: "",
    bathrooms: "",
    country: "",
    address: "",
  });
  const [errors, setErrors] = useState(false);
  function validate(input) {}
  //En el submit parseamos la info para tener cohesion de datos con el back
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, img, price, rooms, bathrooms, country, address } = input;
    try {
      await axios.post("http://localhost:3001/properties/create", {
        name: name,
        img: img,
        price: parseInt(price),
        rooms: parseInt(rooms),
        bathrooms: parseInt(bathrooms),
        country: country,
        address: address,
      });
      alert(`Property "${name}" posted succesfully`);
      setInput({
        name: "",
        img: "",
        price: "",
        rooms: "",
        bathrooms: "",
        country: "",
        address: "",
      });
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={input.img}
          onChange={handleChange}
          placeholder="Image"
          name="img"
        />
        <label htmlFor="">Image</label>
        <input
          type="text"
          value={input.price}
          onChange={handleChange}
          placeholder="Price"
          name="price"
        />
        <label htmlFor="">Price</label>
        <input
          type="text"
          value={input.rooms}
          onChange={handleChange}
          placeholder="Rooms"
          name="rooms"
        />
        <label htmlFor="">Rooms</label>
        <input
          type="text"
          value={input.bathrooms}
          onChange={handleChange}
          placeholder="Bathrooms"
          name="bathrooms"
        />
        <label htmlFor="">Bathrooms</label>
        <input
          type="text"
          value={input.country}
          onChange={handleChange}
          placeholder="Country"
          name="country"
        />
        <label htmlFor="">Country</label>
        <input
          type="text"
          value={input.address}
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
