import React, { useRef } from "react";

import Service from "../service/Service";

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
    header: "Сборник детских песен",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
  {
    header: "Подготовка к поступлению в творческие вузы",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque ad animi, nemo maxime sint! At commodi hic dolores aliquid asperiores sint porro, aliquam itaque accusantium incidunt reiciendis dolorem.",
  },
];

const Services = ({ currentHeight }) => {
  const ref = useRef(null);

  return (
    <div className="services" ref={ref}>
      <div className="grid">
        {DATA.map((item, idx) => (
          <Service
            item={item}
            idx={idx}
            key={idx}
            animate={
              ref.current &&
              ref.current.getBoundingClientRect().y - currentHeight < 100
                ? true
                : false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
