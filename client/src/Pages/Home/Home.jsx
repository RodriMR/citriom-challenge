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
import { Gallery_Section } from "../../components/Gallery_Section/Gallery_Section";
import { Footer } from "../../components/Footer/Footer";
import { Filters_Section } from "../../components/Filters_Section/Filters_Section";

export const Home = () => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    getAllProperties(dispatch);
  }, []);

  return (
    <div className="container">
      <div className="sidebar"></div>
      <Header />
      <Realtors />
      <Features_Section />
      <Story_Section />
      <Filters_Section />
      <Homes_Section />
      <Gallery_Section />
      <Footer />
    </div>
  );
};
