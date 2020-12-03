import React from 'react';
import FormComponent from './components/FormComponent';
import { CssBaseline, Container } from '@material-ui/core';


function App() {
    return (
        <Container fixed className="containerApp">
            <CssBaseline />
            <FormComponent /> 
        </Container >
    )
}

export default App


