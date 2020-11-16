import React, { useState } from "react";

import MusicCover from "../music-cover";
import CtaButton from "../cta-button";

import img1 from "../../assets/song1.jpeg";
import img2 from "../../assets/song2.jpeg";
import img3 from "../../assets/song3.jpeg";

import "./Carousel.scss";

const DATA = [
  {
    img: img1,
    name: '"ПРО ПАПУ"',
  },
  {
    img: img2,
    name: '"ПЕСНЯ 2"',
  },
  {
    img: img3,
    name: '"ПЕСНЯ 3',
  },
];

const POSITIONS = ["center", "right", "left"];

const Carousel = () => {
  const [num, setNum] = useState(0);
  const [reverse, setReverse] = useState(false);

  const addNum = () => {
    setReverse(false);
    setNum((num + 1) % 3);
  };

  const subNum = () => {
    setReverse(true);
    if (num === 0) return setNum(2);
    setNum(num - 1);
  };
  return (
    <div className="carousel">
      <div className="carousel__header">
        <h2>
          песня
          <em style={{ fontWeight: 400 }}>{DATA[num].name}</em>
        </h2>
      </div>
      <div className="carousel__music">
        <div
          className={`carousel__cover ${POSITIONS[num]} ${
            reverse ? "reverse" : ""
          }`}
        >
          <MusicCover img={DATA[0].img} position={POSITIONS[num]} />
        </div>
        <div
          className={`carousel__cover ${POSITIONS[(num + 1) % 3]} ${
            reverse ? "reverse" : ""
          }`}
        >
          <MusicCover img={DATA[1].img} position={POSITIONS[(num + 1) % 3]} />
        </div>
        <div
          className={`carousel__cover ${POSITIONS[(num + 2) % 3]} ${
            reverse ? "reverse" : ""
          }`}
        >
          <MusicCover img={DATA[2].img} position={POSITIONS[(num + 2) % 3]} />
        </div>
        <div className="carousel__arrows">
          <i
            className="fas fa-arrow-circle-right fa-4x right"
            onClick={addNum}
          ></i>
          <i
            className="fas fa-arrow-circle-left fa-4x left"
            onClick={subNum}
          ></i>
        </div>
      </div>
      <div className="carousel__cta">
        <CtaButton />
      </div>
    </div>
  );
};

export default Carousel;
