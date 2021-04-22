import React from 'react';
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
import validation from '../../validation/validationFormThree';
import useForm from '../useFormHook/useForm';

const useStyles = makeStyles({
    formClass: {
        color: '#000'
    },
    widthOfTextArea: {
        width: '70%'
    }
});

const initialState = {
    username: '',
    usertext: ''
};

function FormThree() {
    const history = useHistory();
    const classes = useStyles();

    function submit(data) {
        history.push({
            pathname: '/success',
            state: data
        });
    }

    const { values, handleChange, handleSubmit, errors } = useForm(
        submit,
        initialState,
        validation
    );

    return (
        <Grid container justify="center" alignItems="center" className="form-container">
            <Grid item xs={12} sm={6} className={classes.formClass}>
                <form onSubmit={handleSubmit}>
                    <div className="my-3 center">
                        <h2 className="singup">Register</h2>
                    </div>
                    <div className="my-3 center">
                        <TextField
                            required
                            label="Enter your username"
                            type="text"
                            variant="filled"
                            name="username"
                            value={values.username || ''}
                            onChange={handleChange}
                        />
                        <div className="error">
                            {errors.username && <div>{errors.username}</div>}
                        </div>
                    </div>
                    <div className="my-3 center">
                        <TextareaAutosize
                            className={classes.widthOfTextArea}
                            aria-label="minimum height"
                            rowsMin={10}
                            placeholder="user text"
                            value={values.usertext || ''}
                            name="usertext"
                            onChange={handleChange}
                        />
                        <div className="error">
                            {errors.usertext && <div>{errors.usertext}</div>}
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

export default FormThree;
