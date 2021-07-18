import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import { MobileView, BrowserView } from 'react-device-detect';

const MainLayout = ({ children }) => (
  <>
    <BrowserView>
      <Header />
    </BrowserView>
    <MobileView>mobile</MobileView>

    {children}
    <Footer />
  </>
);

export default MainLayout;
