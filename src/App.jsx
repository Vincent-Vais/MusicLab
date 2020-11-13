import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getMin } from "./store/actions/distance";
import { selectAll } from "./store/selectors/refs";

import Nav from "./components/nav";
import HomePage from "./pages/home";
import Portfolio from "./pages/portfolio";
import Music from "./pages/music";
import Footer from "./components/footer";
import RightMenu from "./components/right-menu";

function App() {
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState({ ready: true, show: true });
  const refs = useSelector(selectAll, shallowEqual);

  const handleWheel = (event) => {
    dispatch(getMin(refs));
    if (!scroll.ready) return;
    setScroll(
      event.deltaY < 0 || window.pageYOffset < 100
        ? { ...scroll, show: true }
        : { ...scroll, show: false }
    );
  };

  const handleMouseMove = (event) => {
    if (event.clientY > 100) return;
    setScroll({ ...scroll, show: true });
  };

  const changeSrcollReady = (bool) => {
    setScroll({ ...scroll, ready: bool });
  };

  return (
    <div onWheel={handleWheel} onMouseMove={handleMouseMove}>
      <Nav scroll={scroll} changeSrcollReady={changeSrcollReady} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
      </Switch>
      <Footer />
      <Route path="/">
        <RightMenu />
      </Route>
    </div>
  );
}

export default App;
