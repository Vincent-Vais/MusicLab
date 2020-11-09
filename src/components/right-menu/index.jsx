import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectMin } from "../../store/selectors/distance";
import { selectAll } from "../../store/selectors/refs";
import { getMin } from "../../store/actions/distance";
import "./RightMenu.scss";

const RightMenu = () => {
  const dispatch = useDispatch();
  const refs = useSelector(selectAll, shallowEqual);
  const minRef = useSelector(selectMin, shallowEqual);

  const handleClick = (item) => {
    dispatch(getMin(null, item));
    item.ref.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof minRef !== "string") return;
    const item = refs.find((item) => item.name === minRef);
    if (item) {
      item.ref.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => {
        dispatch(getMin(null, item));
      }, 100);
    }
  }, [minRef, refs, dispatch]);

  return (
    <ul className="rightMenu">
      {refs.map((item, idx) => (
        <li
          className={`rightMenu__item ${
            minRef && minRef.name === item.name ? "rightMenu__item--active" : ""
          }`}
          key={item.name}
          onClick={() => handleClick(item)}
        >
          {item.name}
          {idx !== refs.length - 1 && <span className="rightMenu__line"></span>}
        </li>
      ))}
    </ul>
  );
};

export default RightMenu;
