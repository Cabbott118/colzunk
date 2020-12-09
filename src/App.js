import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components & Pages
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';

// Utility
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <NavBar />
          <div className='App' style={{ margin: '30px 15px 0px' }}>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
              </Switch>
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
