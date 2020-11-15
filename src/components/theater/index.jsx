import React from "react";
import withHeight from "../../withHeight";

import Video from "../video";

import TheaterVideo from "../../assets/theater.mp4";
import "./Theater.scss";

const Theater = () => {
  return (
    <div className="theater">
      <div className="theater__col theater__text">
        <h2 className="theater__text--heading">
          "Алегро" детский музыкальный театр
        </h2>
        <p className="theater__text--main">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          maiores sed dignissimos? Amet adipisci ad ex magnam dolor delectus
          iure.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium maiores sed dignissimos? Amet adipisci ad ex magnam dolor
          delectus iure.
        </p>
      </div>
      <div className="theater__col theater__media">
        <Video src={TheaterVideo} />
      </div>
    </div>
  );
};

export default (props) => withHeight(Theater, 'Театр "Алегро"', props);
