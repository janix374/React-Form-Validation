import React, { useState } from 'react';
import { 
    Grid,
    TextField,
    Button,
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    FormControl,
    InputLabel,
    MenuItem,
    Select } from '@material-ui/core';
import useForm from '../../validation/useForm';
import validation from '../../validation/validationFormTwo';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    formClass:{
        color: '#3A2B69'
    }
});

const initialState = {
    username: '',
    email: '',
    password: '',
    option: 'option1'
}

function FormTwo() {
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
                        <select 
                            name="option"
                            value={values.option || 'option1'} 
                            onChange={handleChange}
                        >
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
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
                            <ListItemText primary="is required" />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <PlayCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="number of characters in between 5 and 15" />
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
                            <ListItemText primary="Minimum 6 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character" />
                        </ListItem>
                    </List>
              
                </Grid> 
         </Grid>
        
    )
}

export default FormTwo;

