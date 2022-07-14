import React from "react";

export const Realtors = () => {
  return (
    <div className="realtors" id="popular-realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img
          src={require("../../img/realtor-1.jpeg")}
          alt="realtors 1"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Nicolas Caffetti</h4>
          <p className="realtors__sold">245 sold</p>
        </div>
        <img
          src={require("../../img/realtor-2.jpeg")}
          alt="realtors 2"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Yi Ortega</h4>
          <p className="realtors__sold">199 sold</p>
        </div>
        <img
          src={require("../../img/realtor-3.jpeg")}
          alt="realtors 3"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Max Rudich</h4>
          <p className="realtors__sold">124 sold</p>
        </div>
      </div>
    </div>
  );
};
