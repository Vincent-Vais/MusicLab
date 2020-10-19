import React, { useState } from "react";
import HomePage from "./pages/home";
import Nav from "./components/nav";

function App() {
  const [scroll, setScroll] = useState({ ready: true, show: true });
  const [currentHeight, setCurrentHeight] = useState(0);

  const handleWheel = (event) => {
    setCurrentHeight(window.pageYOffset);
    if (!scroll.ready) return;
    setScroll(
      event.deltaY < 0 ? { ...scroll, show: true } : { ...scroll, show: false }
    );
  };

  const changeSrcollReady = (bool) => {
    setScroll({ ...scroll, ready: bool });
  };

  return (
    <div onWheel={handleWheel}>
      <Nav scroll={scroll} changeSrcollReady={changeSrcollReady} />
      <HomePage currentHeight={currentHeight} />
    </div>
  );
}

export default App;
