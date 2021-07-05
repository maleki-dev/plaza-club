import React from 'react';
import Banner from '../../../components/club-contents/banner/banner.component';
import WidgetBox from '../../../components/club-contents/widget-box/widget-box.component';
import Favorites from '../../../components/club-contents/favorites/favorites.component.jsx';

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
