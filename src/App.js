import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from './App.styles.js';
import MainLayout from './layouts/main/main.layout.jsx';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Home from './pages/home/home.component.jsx';
import ClubLayout from './layouts/club/club.layout.jsx';
import ClubPageHome from './pages/club/home/home.component.jsx';
import Scores from './pages/club/scores/scores.component.jsx';

const App = () => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/club">
            <ClubLayout>
              <Switch>
                <Route exact path="/club" component={ClubPageHome} />
                <Route exact path="/club/scores" component={Scores} />
              </Switch>
            </ClubLayout>
          </Route>
        </Switch>
      </MainLayout>
    </PageWrapper>
  );
};

export default App;
