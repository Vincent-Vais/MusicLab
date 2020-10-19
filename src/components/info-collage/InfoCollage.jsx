import React from "react";

import "./InfoCollage.scss";

import group1 from "../../assets/group1.jpg";
import group2 from "../../assets/group2.jpg";
import group3 from "../../assets/group3.jpg";

const InfoCollage = () => {
  return (
    <div className="collage">
      <div className="collage__row">
        <div className="collage__col">
          <div className="collage__header">Lorem ipsum dolor sit amet.</div>
          <div className="collage__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            culpa velit ducimus iure, dolore soluta saepe libero, autem deserunt
            obcaecati doloribus sequi recusandae amet cumque distinctio
            molestiae quisquam similique dolorem!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia, culpa velit ducimus iure.
          </div>
        </div>
        <div className="collage__col--big">
          <div className="collage__img-container">
            <img src={group1} alt="group 1" className="collage__img group--1" />
            <img src={group2} alt="group 1" className="collage__img group--2" />
            <img src={group3} alt="group 1" className="collage__img group--3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCollage;
