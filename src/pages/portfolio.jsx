import React from "react";

import About from "../components/about";
import Reference from "../components/reference";
import Achievments from "../components/achievments";
import Students from "../components/students";
import Theater from "../components/theater";

const REFERENCES = [
  {
    name: "Ян Вайс",
    img:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis illo tenetur enim, eligendi dolores ratione est quos vero sint, explicabo distinctio laudantium unde aut reiciendis provident reprehenderit tempore commodi!",
    display: "Отзыв",
  },
];

const Portfolio = () => {
  return (
    <React.Fragment>
      <About />
      <Reference studentRef={REFERENCES[0]} />
      <Achievments />
      <Students />
      <Theater />
    </React.Fragment>
  );
};

export default Portfolio;
