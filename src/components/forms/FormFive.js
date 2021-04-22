import React, { useState, useEffect } from 'react';
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
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Radio,
    Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useHistory } from 'react-router-dom';
import validation from '../../validation/validationFormFive';

const useStyles = makeStyles({
    formClass: {
        color: '#000'
    },
    fileUpload: {
        display: 'none'
    }
});

function FormFive() {
    const history = useHistory();
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('female');
    const [buttonCheck, setButtonCheck] = useState({
        checkedA: false,
        checkedB: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState('');

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeRadio = (e) => {
        setGender(e.target.value);
    };

    const handleChangeCheck = (e) => {
        const { name, checked } = e.target;
        setButtonCheck({ ...buttonCheck, [name]: checked });
    };

    const values = {
        username,
        email,
        gender,
        buttonCheck
    };

    function submit(data) {
        history.push({
            pathname: '/success',
            state: data
        });
    }

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
                            variant="filled"
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
                            variant="filled"
                            name="userEmail"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <div className="error">{errors.email && <div>{errors.email}</div>}</div>
                    </div>
                    <div className="my-3 center">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={gender}
                                onChange={handleChangeRadio}>
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="my-3 center">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={buttonCheck.checkedA}
                                    onChange={handleChangeCheck}
                                    name="checkedA"
                                />
                            }
                            label="Option A"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={buttonCheck.checkedB}
                                    onChange={handleChangeCheck}
                                    name="checkedB"
                                />
                            }
                            label="Option B"
                        />
                        <div className="error">
                            {errors.buttonCheck && <div>{errors.buttonCheck}</div>}
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
                        <ListItemText primary="number of characters in between 5 and 15" />
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
                        buttonCheck:
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="At least one check box must be checked" />
                    </ListItem>
                </List>

                <List component="nav" aria-label="main mailbox folders">
                    <Typography variant="h6" component="p">
                        gender:
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="No validation" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default FormFive;
