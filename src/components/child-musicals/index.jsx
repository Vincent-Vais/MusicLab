import React from "react";

import CtaButton from "../cta-button";

import src from "../../assets/theater.mp4";
import Video from "../video";

import "./ChildMusicals.scss";

const ChildMusicals = () => {
  return (
    <div className="child-musicals">
      <div className="child-musicals__grid">
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
        <div className="child-musicals__item">
          <div className="child-musicals__item--video">
            <Video src={src} />
          </div>
          <div className="child-musicals__item--name">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt at.
            </h3>
          </div>
        </div>
      </div>
      <div className="child-musicals__cta">
        <CtaButton />
      </div>
    </div>
  );
};

export default ChildMusicals;
