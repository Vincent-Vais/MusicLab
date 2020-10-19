import React from "react";

import Hero from "../components/hero/Hero";
import InfoShort from "../components/info-short/InfoShort";
import Services from "../components/services/Services";
import InfoCollage from "../components/info-collage/InfoCollage";
import Footer from "../components/footer/Footer";

const HomePage = ({ currentHeight }) => {
  return (
    <div>
      <Hero />
      <InfoShort />
      <InfoCollage />
      <Services currentHeight={currentHeight} />
      <Footer />
    </div>
  );
};

export default HomePage;
