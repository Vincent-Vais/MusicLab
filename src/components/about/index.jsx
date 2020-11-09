import React from "react";
import withHeight from "../../withHeight";

import AboutImage from "../../assets/about.jpg";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__row">
        <div className="about__col">
          <img className="about__img" src={AboutImage} alt="Marina Sergeevna" />
        </div>
        <div className="about__col">
          <h1 className="about__header">Давайте знакомиться</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
            enim laboriosam nostrum iste fugiat quae consequuntur dignissimos
            reiciendis debitis assumenda rerum inventore commodi cumque labore
            quo nulla, minus rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default (props) => withHeight(About, "Обо мне", props);
