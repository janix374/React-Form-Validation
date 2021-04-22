import React, { useState, useEffect } from 'react';
import {
    Grid,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useHistory } from 'react-router-dom';
import validation from '../../validation/validationFormFour';

const useStyles = makeStyles({
    formClass: {
        color: '#000'
    },
    fileUpload: {
        display: 'none'
    }
});

function FormFour() {
    const history = useHistory();
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [fileInput, setFileInput] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    const handleFileInput = (e) => {
        setFileInput(e.target.files[0]);
    };

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const values = {
        username,
        userEmail,
        fileInput
    };

    const submit = (data) => {
        history.push({
            pathname: '/success',
            state: data
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit(values);
        }
    }, [errors]);

    return (
        <Grid container justify="center" alignItems="center" className="form-container">
            <Grid item xs={12} sm={6} className={classes.formClass}>
                <form onSubmit={handleSubmit}>
                    <div className="my-3 center">
                        <h2 className="singup">Register</h2>
                    </div>
                    <div className="my-3 center">
                        <TextField
                            label="Enter your username"
                            type="text"
                            multiline
                            value={username}
                            onChange={handleChangeUserName}
                            name="username"
                        />
                        <div className="error">
                            {errors.username && <div>{errors.username}</div>}
                        </div>
                    </div>
                    <div className="my-3 center">
                        <TextField
                            label="Enter your email"
                            multiline
                            name="userEmail"
                            type="email"
                            value={userEmail}
                            onChange={handleChangeEmail}
                        />
                        <div className="error">
                            {errors.userEmail && <div>{errors.userEmail}</div>}
                        </div>
                    </div>
                    <div className="my-3 center">
                        <input
                            accept="image/*"
                            className={classes.fileUpload}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleFileInput}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload Photo
                            </Button>
                        </label>
                        <input
                            accept="image/*"
                            className={classes.fileUpload}
                            id="icon-button-file"
                            type="file"
                        />
                        <div className="error">
                            {errors.fileInput && <div>{errors.fileInput}</div>}
                        </div>
                    </div>
                    <div className="my-3 center">
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Grid>
            <Grid item xs={12} sm={6} className="rocket">
                <Typography variant="h6" component="p">
                    Validation rules
                </Typography>

                <List component="nav" aria-label="main mailbox folders">
                    <Typography variant="h6" component="p">
                        username:
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="is required" />
                    </ListItem>
                    <ListItem>
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
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="is required" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="valid email" />
                    </ListItem>
                </List>

                <List component="nav" aria-label="main mailbox folders">
                    <Typography variant="h6" component="p">
                        fileInput:
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="is required" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="file size between 5000 and 200000" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="file type can be jpg, jpeg, png" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default FormFour;
