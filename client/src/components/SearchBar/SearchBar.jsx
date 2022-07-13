import axios from "axios";
import React, { useState } from "react";
import { useStore } from "../../context/store";
import { FETCH_PROPERTIES } from "../../redux/actions/actionTypes";
export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useStore();
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(
        `http://localhost:3001/properties?name=${input}`
      );
      dispatch({
        type: FETCH_PROPERTIES,
        payload: res.data,
      });
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search property"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
