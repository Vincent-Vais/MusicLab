import React, { useState, useEffect } from "react";
import withHeight from "../../withHeight";
import { useSelector, shallowEqual } from "react-redux";
import { selectMin } from "../../store/selectors/distance";

import Service from "../service/";

import "./Services.scss";

const DATA = [
  {
    header: "Индивидуальные занятия вокалом",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
  {
    header: "Услуги композитора",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
  {
    header: 'Методическое пособие "Чудо-карусель"',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
  {
    header: "Подготовка к поступлению в КУДА??",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
];

const Services = () => {
  const minRef = useSelector(selectMin, shallowEqual);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!minRef) return;
    if (minRef.name === "Контакты" || minRef.name === "Услуги")
      setAnimate(true);
  }, [minRef]);

  return (
    <div className="services">
      <div className="grid">
        {DATA.map((item, idx) => (
          <Service item={item} idx={idx} key={idx} animate={animate} />
        ))}
      </div>
    </div>
  );
};

export default (props) => withHeight(Services, "Услуги", props);
