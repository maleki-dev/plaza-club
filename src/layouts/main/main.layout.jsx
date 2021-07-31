import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header.component';
import HeaderMobile from '../../components/mobile/header/header.component';
import Footer from '../../components/footer/footer.component';
import { MobileView, BrowserView } from 'react-device-detect';
import NavProvider from '../../providers/nav.provider';
import Carousel from '../../components/carousel/carousel.component';
import { carouselData, mobileCarouselData } from '../../components/carousel/carousel.data';
import { CarouselContainer } from './main.styles';

const MainLayout = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const carouselProps = {
    scale: isSmallScreen ? 0.48 : 0.22,
    slides: isSmallScreen ? mobileCarouselData : carouselData,
    autoPlay: 3,
  };

  return (
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
          <Carousel {...carouselProps} />
        </CarouselContainer>
      </MobileView>
    </>
  );
};

export default MainLayout;
