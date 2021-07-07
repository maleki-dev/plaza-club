import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from './App.styles';
import MainLayout from './layouts/main/main.layout';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Home from './pages/home/home.component';
import ClubLayout from './layouts/club/club.layout';
import ClubPageHome from './pages/club/home/home.component';
import Scores from './pages/club/scores/scores.component';
import History from './pages/club/history/history.component';
import Teammates from './pages/club/teammates/teammates.component';

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
                <Route exact path="/club/history" component={History} />
                <Route exact path="/club/teammates" component={Teammates} />
              </Switch>
            </ClubLayout>
          </Route>
        </Switch>
      </MainLayout>
    </PageWrapper>
  );
};

export default App;
