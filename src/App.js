import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';

import GlobalStyles from './App.styles.js';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ClubPage from './pages/club/club.component.jsx';

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <GlobalStyles />
        <Header />
        <ClubPage />
        <Footer />
      </PageWrapper>
    </Router>
  );
};

export default App;
