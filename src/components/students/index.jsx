import React, { useState } from "react";
import withHeight from "../../withHeight";

import "./Students.scss";

const DATA = [
  {
    name: "Ян Вайс",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    descr: "Студент такой-то школы или участник такого-то конкурса",
    achievments: ["Lorem", "Lorem", "Lorem", "Lorem"],
  },
  {
    name: "Ян Вайс",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    descr: "Студент такой-то школы или участник такого-то конкурса",
    achievments: ["Lorem", "Lorem", "Lorem", "Lorem"],
  },
  {
    name: "Ян Вайс",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    descr: "Студент такой-то школы или участник такого-то конкурса",
    achievments: ["Lorem", "Lorem", "Lorem", "Lorem"],
  },
];

const Students = () => {
  const [animate, setAnimate] = useState({ 0: false, 1: false, 2: false });
  return (
    <div className="students">
      <div className="students__row">
        {DATA.map((item, idx) => (
          <div
            className="students__col"
            key={`${item.name}-${idx}`}
            onClick={() => setAnimate({ ...animate, [idx]: !animate[idx] })}
          >
            <div
              className={`students__paper students__front ${
                animate[idx] ? "reverse" : ""
              }`}
            >
              <div className="students__paper--front__top">
                <h3>
                  <i className="fas fa-user"></i> {item.name}
                </h3>
              </div>
              <div className="students__paper--front__bottom">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
            <div
              className={`students__paper students__back ${
                animate[idx] ? "reverse" : ""
              }`}
            >
              <div className="students__paper--back__top">
                <img alt={`${item.name}-alt`} src={item.image} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.descr}</p>
                </div>
              </div>
              <div className="students__paper--back__bottom">
                <ul>
                  {item.achievments.map((ach, idx) => (
                    <li key={`${ach}-${idx}`}>
                      <i className="fas fa-award"></i>&nbsp;&nbsp;{ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default (props) => withHeight(Students, "Студенты", props);
