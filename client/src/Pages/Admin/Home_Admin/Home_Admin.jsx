import React, { useEffect, useState } from "react";
import { getAllProperties } from "../../../redux/actions/actions";
import { useStore } from "../../../context/store.js";
import "./home.scss";
import { Property_Card_Admin } from "../../../components/Admin/Property_Card_Admin/Property_Card_Admin";
import { Property_Card } from "../../../components/Property_Card/Property_Card";
import {
  FETCH_PROPERTIES,
  FILTER_PROPERTIES,
  ORDER_PROPERTIES,
} from "../../../redux/actions/actionTypes";

export const Home_Admin = () => {
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
    getAllProperties(dispatch);
  }, []);
  useEffect(() => {
    handleFilter();
  }, [state.properties, country]);
  useEffect(() => {
    handleOrder();
  }, [atribute, order]);
  return (
    <div className="section-home">
      <label htmlFor="">Filter By:</label>
      <select
        className="section-home__select"
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
      <select
        className="select"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">All</option>
        {state.countries?.map((country) => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>
      <select
        className="section-home__select"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="ASC">Asc</option>
        <option value="DESC">Desc</option>
      </select>
      <button
        onClick={() => {
          getAllProperties(dispatch);
          setAtribute("");
          setCountry("");
        }}
      >
        Reset
      </button>
      <div className="section-cards">
        {state.filteredProperties.length ? (
          state.filteredProperties.map((property) => {
            return (
              <Property_Card_Admin
                key={property.id}
                name={property.name}
                img={property.img}
                price={property.price}
                rooms={property.rooms}
                bathrooms={property.bathrooms}
                country={property.country}
                address={property.address}
                id={property.id}
              />
            );
          })
        ) : (
          <p>Property not found</p>
        )}
      </div>
    </div>
  );
};
