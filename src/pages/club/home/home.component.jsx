import React from 'react';
import Banner from '../contents/banner/banner.component';
import WidgetBox from '../contents/widget-box/widget-box.component';
import Favorites from '../contents/favorites/favorites.component.jsx';

import { OfferBox } from '../club.styles';

const ClubPageHome = () => {
  return (
    <>
      <OfferBox>
        <Banner />
        <WidgetBox />
      </OfferBox>
      <Favorites />
    </>
  );
};

export default ClubPageHome;
