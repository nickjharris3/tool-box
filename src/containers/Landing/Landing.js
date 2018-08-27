import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Home from '../Home/Home';
import MenuAppBar from '../../components/AppBar/AppBar';

const Landing = () => (
  <BrowserRouter>
    <div>
    <MenuAppBar />
    <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/home" component={Home} />
        <Route
          path="/*"
          render={() => <Redirect to="/" />}
        />
    </Switch>
    </div>
  </BrowserRouter>
);

export default Landing;