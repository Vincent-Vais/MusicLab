import React from "react";

import MusicCover from "../music-cover";
import CtaButton from "../cta-button";

import song1 from "../../assets/song1.jpeg";

import "./ChildSongs.scss";

const ChildSongs = () => {
  return (
    <div className="child-songs">
      <div className="child-songs__grid">
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
        <div className="child-songs__item">
          <MusicCover img={song1} />
        </div>
      </div>
      <div>
        <CtaButton />
      </div>
    </div>
  );
};

export default ChildSongs;
