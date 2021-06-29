import React from 'react';
import Banner from '../banner/banner.component';
import WidgetBox from '../widget-box/widget-box.component';
import Favorites from '../favorites/favorites.component.jsx';

import { OfferBox } from '../../club.styles';

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
