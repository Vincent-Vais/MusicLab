import React from "react";

import MusicCover from "../music-cover";
import img from "../../assets/song1.jpeg";

import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__header">
        <h2>
          песня
          <em style={{ fontWeight: 400 }}>" ПРО ПАПУ"</em>
        </h2>
      </div>
      <div className="carousel__music">
        <div className="carousel__cover center">
          <MusicCover img={img} position="center" />
        </div>
        <div className="carousel__cover left">
          <MusicCover img={img} position="left" />
        </div>
        <div className="carousel__cover right">
          <MusicCover img={img} />
        </div>
      </div>
      <div className="carousel__cta">
        <button className="carousel__button">Заказать музыку</button>
      </div>
    </div>
  );
};

export default Carousel;
