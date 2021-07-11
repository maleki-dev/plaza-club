import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyles from './App.styles';
import PageWrapper from './components/page-wrapper/page-wrapper.component';
import Home from './pages/home/home.component';
import MainLayout from './layouts/main/main.layout';
import ClubLayout from './layouts/club/club.layout';
import AuthLayout from './layouts/auth/auth.layout';
import ClubPageHome from './pages/club/home/home.component';
import Scores from './pages/club/scores/scores.component';
import History from './pages/club/history/history.component';
import Teammates from './pages/club/teammates/teammates.component';
import SignIn from './pages/auth/sign-in/sign-in.component';
import SignUp from './pages/auth/sign-up/sign-up.component';
import Page404 from './pages/page404/page404.component';
import withUser from './hoc/withUser.component';

const App = ({ currentUser }) => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <Switch>
        <Route path="/auth">
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <Route path="/auth">
              <AuthLayout>
                <Switch>
                  <Route exact path="/auth/sign-in" component={SignIn} />
                  <Route exact path="/auth/sign-up" component={SignUp} />
                  <Route>
                    <Redirect to="/404" />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
          )}
        </Route>
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
                  <Route>
                    <Redirect to="/404" />
                  </Route>
                </Switch>
              </ClubLayout>
            </Route>
            <Route path="/404" component={Page404} />
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </MainLayout>
      </Switch>
    </PageWrapper>
  );
};

export default withUser(App);
