import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Grid } from '@material-ui/core';

function FormComponent() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (

        <Grid container>
            <Grid item xs={6} className="rocket" ></Grid>
            <Grid item xs={6} >
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />): (<FormSuccess />)}
            </Grid>
         </Grid>
    )
}

export default FormComponent
