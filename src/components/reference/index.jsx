import React from "react";
import withHeight from "../../withHeight";

import "./Reference.scss";

const Reference = ({ studentRef }) => {
  const { name, text, img } = studentRef;
  return (
    <div className="reference">
      <div className="reference__row">
        <div className="reference__col-1-4">
          <img src={img} alt={name} className="reference__img" />
        </div>
        <div className="reference__col-3-4">
          <p className="reference__text">
            <span className="reference__quote">
              <i className="fas fa-quote-right"></i>
            </span>
            {text}
          </p>
          <h4 className="reference__name">
            <em>{name}</em>
          </h4>
        </div>
        <button className="reference__button">Перейти к отзывам</button>
      </div>
    </div>
  );
};

export default (props) =>
  withHeight(Reference, props.studentRef.display, props);
