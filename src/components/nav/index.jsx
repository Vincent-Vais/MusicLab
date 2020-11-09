import React from "react";
import withHeight from "../../withHeight";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import "./Nav.scss";

const Nav = ({ scroll, changeSrcollReady }) => {
  return (
    <div
      className={`nav ${scroll.show ? "showNav" : "hideNav"}`}
      onAnimationStart={() => changeSrcollReady(false)}
      onAnimationEnd={() => changeSrcollReady(true)}
    >
      <ul className="nav__list">
        <NavLink
          className="nav__item--left nav__item"
          to="/"
          activeClassName="nav__selected"
        >
          <img className="nav__logo" src={Logo} alt="logo" />
        </NavLink>
        <NavLink
          to="/portfolio"
          activeClassName="nav__selected"
          className="nav__item"
        >
          Портфолио
        </NavLink>
        <NavLink
          to="/music"
          activeClassName="nav__selected"
          className="nav__item"
        >
          Музыка
        </NavLink>
        <NavLink
          to="/lessons"
          activeClassName="nav__selected"
          className="nav__item"
        >
          Занятия
        </NavLink>
        <NavLink
          to="/references"
          activeClassName="nav__selected"
          className="nav__item"
        >
          Отзывы
        </NavLink>
      </ul>
    </div>
  );
};

export default (props) => withHeight(Nav, "Наверх", props);
