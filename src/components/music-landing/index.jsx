import React from "react";
import withHeight from "../../withHeight";

import MusicCover from "../music-cover";

import img from "../../assets/song1.jpeg";
import "./MusicLanding.scss";

const MusicLanding = () => {
  return (
    <div className="musicLanding">
      <div className="musicLanding__row">
        <div className="musicLanding__col">
          <div className="musicLanding__cover">
            <MusicCover img={img} />
          </div>
        </div>
        <div className="musicLanding__col">
          <div className="musicLanding__content">
            <div className="musicLanding__header">Композитор детских песен</div>
            <div className="musicLanding__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              culpa velit ducimus iure, dolore soluta saepe libero, autem
              deserunt obcaecati doloribus sequi recusandae amet cumque
              distinctio molestiae quisquam similique dolorem!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Mollitia, culpa velit
              ducimus iure.
            </div>
            <button className="musicLanding__button">Перейти к музыке</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (props) => withHeight(MusicLanding, "Музыка", props);
