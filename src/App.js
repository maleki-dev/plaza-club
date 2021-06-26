import React from 'react';
import GlobalStyles from './App.styles.js';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ClubPage from './pages/club/club.component.jsx';

const App = () => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <ClubPage />
      <Footer />
    </PageWrapper>
  );
};

export default App;
