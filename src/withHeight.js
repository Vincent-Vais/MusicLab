import React, { useRef, useEffect } from "react";
import actions from "./store/actions/refs";
import { useDispatch } from "react-redux";

const HeightWrapper = ({ name, Component, ...otherProps }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setRef({ ref: ref.current, name }));
    return () => {
      dispatch(actions.removeRef(name));
    };
  }, [dispatch, name]);

  return (
    <div ref={ref}>
      <Component {...otherProps} />
    </div>
  );
};

export default (Component, name, props) => (
  <HeightWrapper name={name} Component={Component} {...props} />
);
