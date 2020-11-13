import React, { useState } from "react";

import SideMenu from "../components/side-menu";
import Carousel from "../components/carousel";
import ChildMusicals from "../components/child-musicals";

const Music = () => {
  const [tab, setTab] = useState('"Чудо-карусель"');

  const names = [
    { name: '"Чудо-карусель"', component: Carousel },
    { name: "Детские мюзиклы", component: ChildMusicals },
    // "Взрослые песни",
    // "Гимны",
    // '"Веселая перепутаница"',
  ];

  const changeCurrent = (name) => setTab(name);

  const findComponent = (arr) => {
    const item = arr.find(({ name }) => name === tab);
    return item ? <item.component /> : null;
  };

  return (
    <div style={{ display: "flex" }}>
      <SideMenu changeCurrent={changeCurrent} tab={tab} names={names} />
      {findComponent(names)}
      {/* <MenuSwitch>
          <Toolkit />
          <Musicals />
          <ChildSongs />
          <AdultSongs />
          <Hymn />
          <Collection />
      </MenuSwitch> */}
    </div>
  );
};

export default Music;
