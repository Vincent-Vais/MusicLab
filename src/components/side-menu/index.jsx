import React from "react";

import "./SideMenu.scss";

const SideMenu = ({ tab, changeCurrent, names }) => {
  return (
    <div className="side-menu">
      <ul className="side-menu__list">
        {names.map(({ name }, idx) => (
          <li
            key={`${name}${idx}${name}`}
            className={`side-menu__item ${tab === name ? "active" : ""}`}
            onClick={() => changeCurrent(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
