import React from "react";
import withHeight from "../../withHeight";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMin } from "../../store/actions/distance";

import img from "../../assets/avatar.jpg";
import "./InfoShort.scss";

const InfoShort = () => {
  const dispatch = useDispatch();
  return (
    <div className="info">
      <div className="info__row">
        <div className="info__col-1-4">
          <img src={img} alt="Marina Vorotova" className="info__img" />
        </div>
        <div className="info__col-3-4">
          <div className="info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            culpa velit ducimus iure, dolore soluta saepe libero, autem deserunt
            obcaecati doloribus sequi recusandae amet cumque distinctio
            molestiae quisquam similique dolorem!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia, culpa velit ducimus iure.
          </div>
        </div>
        <Link
          to="/portfolio"
          className="info__button"
          onClick={() => dispatch(setMin("Обо мне"))}
        >
          Читать дальше
        </Link>
      </div>
    </div>
  );
};

export default (props) => withHeight(InfoShort, "Обо мне", props);
