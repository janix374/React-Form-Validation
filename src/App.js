import React from 'react';
import { Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import FormOne from './components/forms/FormOne';
import FormTwo from './components/forms/FormTwo';
import NavBar from './components/NavBar';
import FormSuccess from './components/forms/FormSuccess';
import NotFoundPage from './components/NotFoundPage';
import FormThree from './components/forms/FormThree';
import FormFour from './components/forms/FormFour';
import FormFive from './components/forms/FormFive';

const theme = createMuiTheme({
    palette: {
        // primary: { main: "#fff", contrastText: "#fff" },
        secondary: { main: '#fff', contrastText: '#fff' }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter basename="/">
                <Grid container className="containerApp">
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
                        <Route path="/formthree">
                            <FormThree />
                        </Route>
                        <Route path="/formfour">
                            <FormFour />
                        </Route>
                        <Route path="/formfive">
                            <FormFive />
                        </Route>
                        <Route path="/success">
                            <FormSuccess />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Grid>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
