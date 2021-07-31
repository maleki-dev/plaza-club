import React from 'react';
import Header from '../../components/header/header.component';
import HeaderMobile from '../../components/mobile/header/header.component';
import Footer from '../../components/footer/footer.component';
import { MobileView, BrowserView } from 'react-device-detect';
import NavProvider from '../../providers/nav.provider';
import Carousel from '../../components/carousel/carousel.component';
import { carouselData } from '../../components/carousel/carousel.data';
import { CarouselContainer } from './main.styles';

const MainLayout = ({ children }) => (
  <>
    <BrowserView>
      <NavProvider>
        <Header />
      </NavProvider>
      {children}
      <Footer />
    </BrowserView>
    <MobileView>
      <HeaderMobile />
      <CarouselContainer>
        <Carousel slides={carouselData} autoPlay={3} scale="0.5" />
      </CarouselContainer>
    </MobileView>
  </>
);

export default MainLayout;
