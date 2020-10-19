import React from "react";
import "./Nav.scss";

const Nav = ({ scroll, changeSrcollReady }) => {
  return (
    <div
      className={`nav ${scroll.show ? "showNav" : "hideNav"}`}
      onAnimationStart={() => changeSrcollReady(false)}
      onAnimationEnd={() => changeSrcollReady(true)}
    >
      <ul className="nav__list">
        <li className="nav__item--left nav__item">MV</li>
        <li className="nav__item">Обо мне</li>
        <li className="nav__item">Музыка</li>
        <li className="nav__item">Занятия</li>
        <li className="nav__item">Контакты</li>
      </ul>
    </div>
  );
};

export default Nav;
