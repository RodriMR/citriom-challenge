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
    <section className="section-add">
      <div className="add">
        <div className="add__form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                value={input.name}
                onChange={handleChange}
                placeholder="Property name"
                name="name"
                id="name"
                required
                className="form__input"
              />
              <label className="form__label" htmlFor="name">
                Property Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="text"
                value={input.img}
                onChange={handleChange}
                placeholder="Image"
                name="img"
                id="img"
                required
                className="form__input"
              />
              <label htmlFor="img" className="form__label">
                Image
              </label>
            </div>
            <div className="form__group">
              <input
                type="number"
                value={input.price}
                onChange={handleChange}
                placeholder="Price"
                name="price"
                required
                className="form__input"
                id="price"
              />
              <label htmlFor="id" className="form__label">
                Price
              </label>
            </div>
            <div className="form__group">
              <input
                type="number"
                value={input.rooms}
                onChange={handleChange}
                placeholder="Rooms"
                name="rooms"
                required
                className="form__input"
                id="rooms"
              />
              <label htmlFor="rooms" className="form__label">
                Rooms
              </label>
            </div>
            <div className="form__group">
              <input
                type="number"
                value={input.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                name="bathrooms"
                required
                className="form__input"
                id="bathrooms"
              />
              <label htmlFor="bathrooms" className="form__label">
                Bathrooms
              </label>
            </div>
            <div className="form__group">
              <input
                type="text"
                value={input.country}
                onChange={handleChange}
                placeholder="Country"
                name="country"
                required
                className="form__input"
                id="country"
              />
              <label htmlFor="country" className="form__label">
                Country
              </label>
            </div>
            <div className="form__group">
              <input
                type="text"
                value={input.address}
                onChange={handleChange}
                placeholder="Address"
                name="address"
                required
                className="form__input"
                id="address"
              />
              <label htmlFor="address" className="form__label">
                Address
              </label>
            </div>

            <button className="btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
