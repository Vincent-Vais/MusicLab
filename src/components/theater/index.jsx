import React, { useRef, useState } from "react";
import withHeight from "../../withHeight";

import Mac from "../../assets/mac.png";
import TheaterVideo from "../../assets/theater.mp4";
import "./Theater.scss";

const Theater = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (!playing) {
      ref.current.play();
      setPlaying(true);
    } else {
      setPlaying(false);
      ref.current.pause();
    }
  };

  return (
    <div className="theater">
      <div className="theater__row">
        <div className="theater__col theater__text">
          <h2 className="theater__text--heading">
            "Алегро" детский музыкальный театр
          </h2>
          <p className="theater__text--main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium maiores sed dignissimos? Amet adipisci ad ex magnam
            dolor delectus iure.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusantium maiores sed dignissimos? Amet adipisci
            ad ex magnam dolor delectus iure.
          </p>
        </div>
        <div className="theater__col theater__media">
          <img src={Mac} className="theater__media--img" alt="macbook" />
          <span className="theater__media--icon" onClick={handleClick}>
            <i
              className={`far fa-${playing ? "pause" : "play"}-circle fa-10x`}
            ></i>
          </span>
          <video className="theater__media--video" ref={ref} loop>
            <source src={TheaterVideo} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  );
};

export default (props) => withHeight(Theater, 'Театр "Алегро"', props);
