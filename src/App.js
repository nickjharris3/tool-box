import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import NavBar from './components/AppBar/AppBar';
import SearchBar from './components/SearchBar/SearchBar';
import ToolDashboard from './components/ToolList/ToolDashboard';
import SimpleModalWrapped from './components/Modal/Modal';
import configStore from "./store/configStore";
import { addTool } from './actions/tools';
import { setTextFilter } from './actions/filters';
import getVisibleTools from './selectors/tools';

const store = configStore();

store.dispatch(addTool({ name: 'slack' }));
store.dispatch(addTool({ name: 'trello'}));
store.dispatch(setTextFilter('ack'));

const state = store.getState();
const visibleTools = getVisibleTools(state.tools, state.filters);
console.log(visibleTools);

// console.log(store.getState());

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <SearchBar />
        <ToolDashboard />
        <SimpleModalWrapped />
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
