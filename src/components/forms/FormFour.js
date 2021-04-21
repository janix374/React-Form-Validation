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
    TextareaAutosize
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
    const [errors, setErrors] = useState('');

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    const handleFileInput = (e) => {
        setFileInput(e.target.files[0]);
    };

    const values = {
        username,
        fileInput
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
    };

    // console.log(fileInput);
    // console.log(errors);
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} className={classes.formClass}>
                <div className="my-3 center">
                    <h2 className="singup">Register</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="my-3 center">
                        <TextField
                            label="Enter your username"
                            type="text"
                            variant="filled"
                            value={username}
                            onChange={handleChangeUserName}
                            name="username"
                        />
                        {errors.username && <div className="error">{errors.username}</div>}
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
                        {errors.fileInput && <div className="error">{errors.fileInput}</div>}
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
                        usertext:
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="number of characters max 250" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default FormFour;
