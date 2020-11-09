import React from "react";
import withHeight from "../../withHeight";

import "./Achievments.scss";

const Achievments = () => {
  return (
    <div className="achievments">
      <div className="achievments__row">
        <div className="achievments__col">
          <i className="fas fa-music achievments__icon"></i>
          <div className="achievments__modal">
            <h3 className="achievments__text">Lorem ipsum, dolor sit!</h3>
          </div>
        </div>
        <div className="achievments__col">
          <i className="fas fa-microphone achievments__icon"></i>
          <div className="achievments__modal">
            <h3 className="achievments__text">Lorem ipsum, dolor sit!</h3>
          </div>
        </div>
        <div className="achievments__col">
          <i className="fas fa-trophy achievments__icon"></i>
          <div className="achievments__modal">
            <h3 className="achievments__text">Lorem ipsum, dolor sit!</h3>
          </div>
        </div>
        <div className="achievments__col">
          <i className="fas fa-graduation-cap achievments__icon"></i>
          <div className="achievments__modal">
            <h3 className="achievments__text">Lorem ipsum, dolor sit!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (props) => withHeight(Achievments, "Достижения", props);
