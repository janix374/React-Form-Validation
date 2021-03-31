import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import useForm from '../useFormHook/useForm';
import validation from '../../validation/validationFormOne';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    formClass:{
        color: '#000'
    },
});

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
}

function FormOne() {
    const history = useHistory();
    const classes = useStyles();
    const { values, handleChange, handleSubmit, errors } = useForm(submit, initialState, validation);

    function submit(data) {
        history.push({
            pathname: '/success',
            state: data
        });
    } 

    return (
        <Grid 
            container
            justify="center"
            alignItems="center"
        >
            <Grid item sm={12} sm={6} className={classes.formClass}>
                <div className="my-3 center" ><h2 className="singup">Register</h2></div>
                <form  onSubmit={handleSubmit}>
                    <div className="my-3 center">
                            <TextField
                                label="Enter your username"
                                type="text"
                                variant="filled"
                                name="username"
                                value={values.username || ''}
                                onChange={handleChange}
                            />
                        {errors.username && <div className="error">{errors.username}</div>} 
                    </div>
                    <div className="my-3 center">
                            <TextField
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
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="confirmpassword"
                                variant="filled"
                                value={values.confirmpassword || ''}
                                onChange={handleChange}
                            />
                        {errors.confirmpassword && <div className="error">{errors.confirmpassword}</div>}
                    </div>
                    <div className="my-3 center">
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6} className="rocket" >
                    <Typography variant="h6" component="p">     
                        Validation rules
                    </Typography>
                    
                    <List component="nav" aria-label="main mailbox folders">
                        <Typography variant="h6" component="p">     
                        username:
                        </Typography>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="is required"/>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="number of characters in between 3 and 20" />
                        </ListItem>
                    </List>

                    <List component="nav" aria-label="main mailbox folders">
                        <Typography variant="h6" component="p">     
                        email:
                        </Typography>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="is required" />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="valid email" />
                        </ListItem>
                    </List>

                    <List component="nav" aria-label="main mailbox folders">
                        <Typography variant="h6" component="p">     
                        password:
                        </Typography>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="is required" />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="minimum number of characters 6" />
                        </ListItem>
                    </List>

                    <List component="nav" aria-label="main mailbox folders">
                        <Typography variant="h6" component="p">     
                        confirmpassword:
                        </Typography>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="password and confirmpassword must be eaquel" />
                        </ListItem>
                    </List>
              
                </Grid> 
         </Grid>
        
    )
}

export default FormOne
