import React from 'react';
import { GlobalStyles } from './App.styles.js';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <Footer />
    </PageWrapper>
  );
};

export default App;
