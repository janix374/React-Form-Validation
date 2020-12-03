import React from 'react';
import useForm from '../validation/useForm';
import { Grid, TextField, Button  } from '@material-ui/core';
import validate from '../validation/validation';

function FormSignup({ submitForm }) {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
    return (
        <Grid item sm={12} >
           <form onSubmit={handleSubmit} >
               <div className="my-3 center"><h2>Singup</h2></div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Enter your username"
                        variant="filled"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="red">{errors.username}</p>}
               </div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Enter your email"
                        variant="filled"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                     {errors.email && <p className="red">{errors.email}</p>}
               </div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Password"
                        type="password"
                        name="password"
                        variant="filled"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="red">{errors.password}</p>}
               </div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        variant="filled"
                        value={values.confirmpassword}
                        onChange={handleChange}
                    />
                    {errors.confirmpassword && <p className="red">{errors.confirmpassword}</p>}
               </div>
               <div className="my-3 center">
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
               </div>
            </form>
        </Grid> 
    )
}

export default FormSignup
