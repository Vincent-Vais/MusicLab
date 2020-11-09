import React from "react";
import withHeight from "../../withHeight";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMin } from "../../store/actions/distance";

import "./InfoCollage.scss";

import group1 from "../../assets/group1.jpg";
import group2 from "../../assets/group2.jpg";
import group3 from "../../assets/group3.jpg";

const InfoCollage = () => {
  const dispatch = useDispatch();

  return (
    <div className="collage">
      <div className="collage__grid">
        <div className="collage__grid--1--0">
          <div className="collage__header">
            студенты - победители крупных вокальных конкурсов
          </div>
        </div>
        <div className="collage__grid--2--4">
          <div className="collage__img-container">
            <img src={group1} alt="group 1" className="collage__img group--1" />
            <img src={group2} alt="group 1" className="collage__img group--2" />
            <img src={group3} alt="group 1" className="collage__img group--3" />
          </div>
        </div>
        <div className="collage__grid--1--1">
          <div className="collage__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            culpa velit ducimus iure, dolore soluta saepe libero, autem deserunt
            obcaecati doloribus sequi recusandae amet cumque distinctio
            molestiae quisquam similique dolorem!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia, culpa velit ducimus iure.
          </div>
        </div>
        <div className="collage__grid--3--1">
          <div className="collage__btn-container">
            <Link
              to="/portfolio"
              className="collage__button"
              onClick={() => dispatch(setMin("Студенты"))}
            >
              Читать дальше
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (props) => withHeight(InfoCollage, "Студенты", props);
