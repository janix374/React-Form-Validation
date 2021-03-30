import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
  } from 'react-router-dom';
import Home from './components/Home';
import FormOne from './components/forms/FormOne';
import FormTwo from './components/forms/FormTwo';
import NavBar from './components/NavBar';
import FormSuccess from './components/forms/FormSuccess';
import NotFoundPage from './components/NotFoundPage';

const theme = createMuiTheme({
    palette: {
        // primary: { main: "#fff", contrastText: "#fff" },
        secondary: { main: "#fff", contrastText: "#fff" }
      }
  });

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter basename="/">
            <Grid container className="containerApp" >
            {/* <CssBaseline /> */}
                <NavBar />
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/formone">
                    <FormOne />
                </Route>
                <Route path="/formtwo">
                    <FormTwo />
                </Route>
                <Route path="/success">
                    <FormSuccess />
                </Route>
                <Route >
                    <NotFoundPage />
                </Route>
                </Switch>
            </Grid >
            </HashRouter >
        </ThemeProvider>
  );
}

        
           
       

export default App


