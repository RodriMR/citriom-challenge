import React from "react";
import { useStore } from "../../context/store";
import { Property_Card } from "../Property_Card/Property_Card";

export const Homes_Section = () => {
  const [state, dispatch] = useStore();
  return (
    <section className="homes">
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
    </section>
  );
};
