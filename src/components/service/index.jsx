import React, { useEffect, useState } from "react";

import "./Service.scss";

const Service = ({ item, idx, animate }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    import(`../../assets/grid${idx + 1}.jpeg`).then((data) =>
      setImage(data.default)
    );
  }, [idx]);

  return (
    <div className={`service ${animate ? `animate${idx + 1}` : ""}`}>
      <div className="service__text">
        <h3 className="service__header">{item.header}</h3>
        <p className="service__body">{item.text}</p>
        <button className="service__button">Узнать больше</button>
      </div>
      <img src={image} alt={`service ${idx}`} className="service__img" />
    </div>
  );
};

export default Service;
