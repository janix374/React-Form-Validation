import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Home from './components/Home';
import FormOne from './components/forms/FormOne';
import FormTwo from './components/forms/FormTwo';
import NavBar from './components/NavBar';
import FormSuccess from './components/forms/FormSuccess';


const theme = createMuiTheme({
    palette: {
        // primary: { main: "#fff", contrastText: "#fff" },
        secondary: { main: "#fff", contrastText: "#fff" }
      }
  });

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
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
                </Switch>
            </Grid >
            </Router>
        </ThemeProvider>
  );
}

        
           
       

export default App


