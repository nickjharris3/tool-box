import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Home from './containers/Home/Home';
// import Auth from './containers/Auth/Auth';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} className="App">
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
