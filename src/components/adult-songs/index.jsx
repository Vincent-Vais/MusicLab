import React from "react";

import MusicCover from "../music-cover";
import CtaButton from "../cta-button";

import song1 from "../../assets/song1.jpeg";

import "./AdultSongs.scss";

const AdultSongs = () => {
  return (
    <div className="child-songs">
      <div className="child-songs__grid">
        <div className="child-songs__item item--1-0">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--2-1">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--1-0">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--2-0">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--3-0">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--1-1">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item item--3-0">
          <MusicCover img={song1} />
        </div>
      </div>
      <div>
        <CtaButton />
      </div>
    </div>
  );
};

export default AdultSongs;
