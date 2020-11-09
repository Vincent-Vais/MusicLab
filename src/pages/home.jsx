import React from "react";

import Hero from "../components/hero";
import InfoCollage from "../components/info-collage";
import InfoShort from "../components/info-short";
import MusicLanding from "../components/music-landing";
import Services from "../components/services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoCollage />
      <InfoShort />
      <MusicLanding />
      <Services />
    </div>
  );
};

export default HomePage;
