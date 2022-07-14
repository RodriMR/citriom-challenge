import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="https://www.citriom.com/"
              target="_blank"
              className="navigation__link"
            >
              <span>01</span>About Citriom
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>
              Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#popular-realtors" className="navigation__link">
              <span>03</span>
              Popular Realtors
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
