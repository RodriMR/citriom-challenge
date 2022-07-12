import React, { useEffect } from "react";
import { getAllProperties } from "../../redux/actions/actions";
import { useStore } from "../../context/store.js";
import { Property_Card } from "../../components/Property_Card/Property_Card";
import "./home.scss"
export const Home = () => {
  const [state, dispatch] = useStore();
  useEffect(() => {
    getAllProperties(dispatch);
  }, []);

  return (
    <div className="section-home">
      Home
      <div className="section-cards">
        {console.log(state.properties)}
        {state.properties.length ? (
          state.properties.map((property) => {
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
    </div>
  );
};
