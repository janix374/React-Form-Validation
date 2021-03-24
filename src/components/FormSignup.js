import React, { useState } from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';
import useForm from './../validation/useForm';
import validation from './../validation/validation';

const initialState = {
    email: '',
    password: ''
}

function FormSignup() {
    const { values, handleChange, handleSubmit, errors } = useForm(submit, initialState, validation);

    function submit() {
        console.log('submit succesfully');
    } 

    return (
        <Grid item sm={12} >
           <form  onSubmit={handleSubmit} >
               <div className="my-3 center"><h2>Singup</h2></div>
               <div className="my-3 center">
                    {/* <TextField
                        // required
                        label="Enter your username"
                        type="text"
                        variant="filled"
                        name="username"
                        value={values.username || ''}
                        onChange={handleChange}
                    /> */}
                   {/* {errors.username && <div className="error">{errors.username}</div>}  */}
               </div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Enter your email"
                        variant="filled"
                        name="email"
                        type="email"
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                     {errors.email && <div className="error">{errors.email}</div>}
               </div>
               <div className="my-3 center">
                    <TextField
                        // required
                        label="Password"
                        type="password"
                        name="password"
                        variant="filled"
                        value={values.password || ''}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
               </div>
               <div className="my-3 center">
                    {/* <TextField
                        // required
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        variant="filled"
                        value={values.confirmpassword || ''}
                        onChange={handleChange}
                    /> */}
                   {/* {errors.confirmpassword && <div className="error">{errors.confirmpassword}</div>} */}
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
