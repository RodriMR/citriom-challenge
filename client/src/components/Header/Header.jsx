import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../../img/citriom-logo.png")}
        alt=""
        className="header__logo"
      />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <a href="#homes">
        <button className="btn header__btn">View our properties</button>
      </a>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={require("../../img/logo-bbc.png")} alt="BBC LOGO" />
        <img src={require("../../img/logo-forbes.png")} alt="FORBES LOGO" />
        <img
          src={require("../../img/logo-techcrunch.png")}
          alt="TECHCRUNCH LOGO"
        />
        <img src={require("../../img/logo-bi.png")} alt="BI LOGO" />
      </div>
    </header>
  );
};
