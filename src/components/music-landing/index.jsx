import React from "react";
import withHeight from "../../withHeight";

import img from "../../assets/song1.jpeg";
import "./MusicLanding.scss";

const MusicLanding = () => {
  return (
    <div className="musicLanding">
      <div className="musicLanding__row">
        <div className="musicLanding__col">
          <div className="musicLanding__cover">
            <div className="musicLanding__imgContainer">
              <img src={img} alt="Song" className="musicLanding__img" />
            </div>
            <div className="musicLanding__controls">
              <div className="musicLanding__progress">
                <hr className="musicLanding__progress--line" />
                <span
                  className="musicLanding__progress--circle"
                  style={{ transform: "translate(1.25rem, -50%)" }}
                ></span>
              </div>
            </div>
            <span className="musicLanding__icon--play">
              <i className="fas fa-play fa-6x"></i>
            </span>
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
