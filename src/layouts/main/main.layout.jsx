import React from 'react';
import Header from '../../components/header/header.component';
import HeaderMobile from '../../components/mobile/header/header.component';
import Footer from '../../components/footer/footer.component';
import { MobileView, BrowserView } from 'react-device-detect';
import NavProvider from '../../providers/nav.provider';

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
    </MobileView>
  </>
);

export default MainLayout;
