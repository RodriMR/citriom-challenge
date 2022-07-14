import React, { useEffect, useState } from "react";
import { getAllProperties } from "../../../redux/actions/actions";
import { useStore } from "../../../context/store.js";
import { Property_Card_Admin } from "../../../components/Admin/Property_Card_Admin/Property_Card_Admin";

import {
  FILTER_PROPERTIES,
  ORDER_PROPERTIES,
} from "../../../redux/actions/actionTypes";
import { Header } from "../../../components/Header/Header";
import { Realtors } from "../../../components/Realtors/Realtors";
import { Features_Section } from "../../../components/Features_Section/Features_Section";
import { Story_Section } from "../../../components/Story_Section/Story_Section";
import { Filters_Section } from "../../../components/Filters_Section/Filters_Section";
import { Gallery_Section } from "../../../components/Gallery_Section/Gallery_Section";
import { Footer } from "../../../components/Footer/Footer";

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
    <div className="container">
      <div className="sidebar"></div>
      <Header />
      <Realtors />
      <Features_Section />
      <Story_Section />
      <Filters_Section />

      <section className="homes">
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
      </section>
      <Gallery_Section />
      <Footer />
    </div>
  );
};
