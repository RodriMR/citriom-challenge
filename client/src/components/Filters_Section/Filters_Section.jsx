import React, { useEffect, useState } from "react";
import { useStore } from "../../context/store";
import { getAllProperties } from "../../redux/actions/actions";
import {
  FILTER_PROPERTIES,
  ORDER_PROPERTIES,
} from "../../redux/actions/actionTypes";
import { SearchBar } from "../SearchBar/SearchBar";

export const Filters_Section = () => {
  const [state, dispatch] = useStore();
  const [order, setOrder] = useState("ASC");
  const [atribute, setAtribute] = useState("");
  const [country, setCountry] = useState("");
  let user = JSON.parse(localStorage.getItem("myUser"));
  console.log(user, "SOY USER CHE");
  const handleFilter = () => {
    let filterProperties = [];
    if (country === "") {
      filterProperties = [...state.properties];
    }
    if (country !== "") {
      filterProperties = state.properties.filter(
        (property) => property.country === country
      );
    }
    //-----------------//
    // WORK IN PROGRESS//
    //-----------------//
    // if (status === "" && country === "") {
    // }
    return dispatch({
      type: FILTER_PROPERTIES,
      payload: filterProperties,
    });
  };

  const handleOrder = () => {
    function compare(a, b) {
      if (a[atribute] < b[atribute]) {
        return -1;
      }
      if (a[atribute] > b[atribute]) {
        return 1;
      }
      return 0;
    }

    let orderAllProperties = [];
    let orderFilteredProperties = [];
    if (atribute) {
      if (order === "DESC") {
        orderFilteredProperties = state.filteredProperties.reverse(compare);
        orderAllProperties = state.properties.reverse(compare);
      } else {
        orderFilteredProperties = state.filteredProperties.sort(compare);
        orderAllProperties = state.properties.sort(compare);
      }
      dispatch({
        type: FILTER_PROPERTIES,
        payload: orderFilteredProperties,
      });
      dispatch({
        type: ORDER_PROPERTIES,
        payload: orderAllProperties,
      });
    }
  };
  useEffect(() => {
    handleFilter();
  }, [state.properties, country]);
  useEffect(() => {
    handleOrder();
  }, [atribute, order]);
  return (
    <div className="section-filters">
      <SearchBar />
      <div className="section-filters__container">
        <label>Filter By:</label>
        <select
          className="section-filters__select"
          value={atribute}
          onChange={(e) => setAtribute(e.target.value)}
        >
          <option value="" disabled>
            -
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rooms">Rooms</option>
          <option value="bathrooms">Bathrooms</option>
        </select>
      </div>
      <div className="section-filters__container">
        <label>Location:</label>
        <select
          className="section-filters__select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">All</option>
          {state.countries?.map((country) => {
            return (
              <option
                className="section-filters__option"
                key={country}
                value={country}
              >
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="section-filters__container">
        <label>Order:</label>
        <select
          className="section-filters__select"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <button
        className="btn btn--reset"
        onClick={() => {
          getAllProperties(dispatch);
          setAtribute("");
          setCountry("");
        }}
      >
        Reset
      </button>
    </div>
  );
};
