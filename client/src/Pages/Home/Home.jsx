import React, { useEffect, useState } from "react";
import { getAllProperties } from "../../redux/actions/actions";
import { useStore } from "../../context/store.js";
import { slide as Menu } from "react-burger-menu";
import { Property_Card_Admin } from "../../components/Admin/Property_Card_Admin/Property_Card_Admin";
import { Property_Card } from "../../components/Property_Card/Property_Card";
import {
  FILTER_PROPERTIES,
  ORDER_PROPERTIES,
} from "../../redux/actions/actionTypes";
import { Header } from "../../components/Header/Header";
import { Realtors } from "../../components/Realtors/Realtors";
import { Features_Section } from "../../components/Features_Section/Features_Section";
import { Story_Section } from "../../components/Story_Section/Story_Section";
import { Homes_Section } from "../../components/Homes_Section/Homes_Section";

export const Home = () => {
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
      <div class="sidebar">
        
      </div>
      <Header />
      <Realtors />
      <Features_Section />
      <Story_Section />
      <Homes_Section />
      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            src={require("../../img/gal-1.jpeg")}
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src={require("../../img/gal-2.jpeg")}
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src={require("../../img/gal-3.jpeg")}
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            src={require("../../img/gal-4.jpeg")}
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            src={require("../../img/gal-5.jpeg")}
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            src={require("../../img/gal-6.jpeg")}
            alt="Gallery image 6"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img
            src={require("../../img/gal-7.jpeg")}
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img
            src={require("../../img/gal-8.jpeg")}
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img
            src={require("../../img/gal-9.jpeg")}
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img
            src={require("../../img/gal-10.jpeg")}
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img
            src={require("../../img/gal-11.jpeg")}
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img
            src={require("../../img/gal-12.jpeg")}
            alt="Gallery image 12"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img
            src={require("../../img/gal-13.jpeg")}
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <img
            src={require("../../img/gal-14.jpeg")}
            alt="Gallery image 14"
            className="gallery__img"
          />
        </figure>
      </section>
      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Come work with us!
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Designed by Jonas Schmedtmann and coded by Rodrigo Molina
        </p>
      </footer>
      {/* <div className="section-home">
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
                <Property_Card
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
      </div> */}
    </div>
  );
};
