import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
