import React, { useEffect, useState } from "react";

import "./Service.scss";

const Service = ({ item, idx, animate }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    import(`../../assets/grid${idx + 1}.jpeg`).then((data) =>
      setImage(data.default)
    );
  }, [idx]);

  console.log(animate);

  return (
    <div className={`item ${animate ? `animate${idx + 1}` : ""}`}>
      <div className="item__text">
        <h3 className="item__header">{item.header}</h3>
        <p className="item__body">{item.text}</p>
        <button className="item__button">Узнать больше</button>
      </div>
      <img src={image} alt={`service ${idx}`} className="item__img" />
    </div>
  );
};

export default Service;
