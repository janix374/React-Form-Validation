import React from 'react';
import { Grid, Typography, Button, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Link as RouteLink } from 'react-router-dom';

const useStyles = makeStyles({
    homeClass: {
        paddingTop: '20px'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.homeClass}>
            <Grid item xs={12} className="p-4">
                <Typography variant="h4" component="p">
                    Form field validation project using reusable custom hooks
                </Typography>
                <Typography variant="h6" component="p">
                    The useForm hook manages the states of forms. To validate the fields I create
                    the function validationField(field, arrayOfValidationRules) - first argument is
                    value of field, secound argument is array of custom validation rules. Preview of
                    code for validation -
                    <Link
                        href="https://github.com/janix374/React-Form-Validation/tree/main/src/validation"
                        rel="noopener noreferrer"
                        target="_blank">
                        https://github.com/janix374/React-Form-Validation/tree/main/src/validation
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={12} className="p-4">
                <Typography variant="h5" component="p">
                    Forms example
                </Typography>
                <Box component="div" display="inline" p={2} m={2}>
                    <RouteLink to="/formone">
                        <Button variant="contained" color="default" endIcon={<Icon>send</Icon>}>
                            Form1
                        </Button>
                    </RouteLink>
                    <RouteLink to="/formtwo">
                        <Button variant="contained" color="default" endIcon={<Icon>send</Icon>}>
                            Form2
                        </Button>
                    </RouteLink>
                    <RouteLink to="/formthree">
                        <Button variant="contained" color="default" endIcon={<Icon>send</Icon>}>
                            Form3
                        </Button>
                    </RouteLink>
                    <RouteLink to="/formfour">
                        <Button variant="contained" color="default" endIcon={<Icon>send</Icon>}>
                            Form4
                        </Button>
                    </RouteLink>
                    <RouteLink to="/formfive">
                        <Button variant="contained" color="default" endIcon={<Icon>send</Icon>}>
                            Form5
                        </Button>
                    </RouteLink>
                </Box>
            </Grid>
            <Grid item xs={12} container className="p-3">
                <Typography variant="h5" component="p">
                    Validation rules - description
                </Typography>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">isRequired(message)</span> - check that
                        the value is entered in the field
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">isEmailValid(message)</span> - email
                        validation
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class"> isMinLength(number, message)</span> -
                        minimum number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        number - min number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class"> isMaxLength(number, message)</span> - max
                        number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        number - max number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            isLengthRange(minNumber, maxNumber, message)
                        </span>{' '}
                        - between min and max number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        minNumber - minimum number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        maxNumber - maximum number of characters
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, error message for min and max characters
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            isCustomRegExValidation(regEx, regExMessage)
                        </span>{' '}
                        - regular expression
                    </Typography>
                    <Typography variant="body1" component="p">
                        regEx - custom regular expression, for example
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/
                    </Typography>
                    <Typography variant="body1" component="p">
                        regExMessage - error message for regular expression
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            isRegExValidation(regExMin, regExMax)
                        </span>{' '}
                        - Already a defined regular expression
                    </Typography>
                    <Typography variant="body1" component="p">
                        Minimum 6 and maximum 15 characters, at least one uppercase letter, one
                        lowercase letter, one number and one special character
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            isEqual(firsField, secondField, message)
                        </span>{' '}
                        - comparing the firsField and secondField fields to see if they are equal
                    </Typography>
                    <Typography variant="body1" component="p">
                        firsField - first field to compare
                    </Typography>
                    <Typography variant="body1" component="p">
                        secondField - secound field to compare
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            fileMaxSizeValidation(size, message)
                        </span>{' '}
                        - max size of upload file in bytes.
                    </Typography>
                    <Typography variant="body1" component="p">
                        size - max size
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            fileRangeSizeValidation(minSize, maxSize, message)
                        </span>{' '}
                        - between min and max file size.
                    </Typography>
                    <Typography variant="body1" component="p">
                        minSize - min size
                    </Typography>
                    <Typography variant="body1" component="p">
                        maxSize - max size
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">
                            fileTypeValidation(allowedExtensions, message)
                        </span>{' '}
                        - File type validation.
                    </Typography>
                    <Typography variant="body1" component="p">
                        allowedExtensions - array of file extensions which can be uploaded, for
                        example ['jpg', 'jpeg', 'pdf']
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
                <Grid item xs={12} className="p-1">
                    <Typography variant="body1" component="p">
                        <span className="for-rules-class">IsOneButtonChecked(message)</span> At
                        least one check box must be checked.
                    </Typography>
                    <Typography variant="body1" component="p">
                        message - Optional, you can add your own error message
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
