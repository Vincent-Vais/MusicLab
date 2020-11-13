import React from "react";

import "./MusicCover.scss";

const MusicCover = ({ img, position }) => {
  return (
    <div
      className={`music-cover ${position === "center" ? "center" : ""} ${
        position === "left" ? "left" : ""
      }`}
    >
      <div className="music-cover__imgContainer">
        <img src={img} alt="Song" className="music-cover__img" />
      </div>
      <div className="music-cover__controls">
        <div className="music-cover__progress">
          <hr className="music-cover__progress--line" />
          <span
            className="music-cover__progress--circle"
            style={{ transform: "translate(1.25rem, -50%)" }}
          ></span>
        </div>
      </div>
      <span className="music-cover__icon--play">
        <i className="fas fa-play fa-6x"></i>
      </span>
    </div>
  );
};

export default MusicCover;
