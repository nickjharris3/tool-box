import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import NavBar from './components/AppBar/AppBar';
// import ToolList from './components/ToolBox/ToolBox';
import SimpleModalWrapped from './components/Modal/Modal';
import './firebase/firebase';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <SimpleModalWrapped />
      </MuiThemeProvider>
    );
  }
}

export default App;
