import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import validation from './../validation/validationFormOne';

const useStyles = makeStyles({
    homeClass: {
      paddingTop: '20px'
    },
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
                 The useForm hook manages the states of forms. To validate the fields I create the function validationField(field, arrayOfValidationRules) 
                 - first argument is value of field, secound argument is array of validation rules. Validation rules are in the object utilities.
                 This function validationField returns error message if the field has not passed validation. Preview of code for validation - 
                  <Link href="https://github.com/janix374/React-Form-Validation/tree/main/src/validation" rel="noopener noreferrer" target="_blank">
                    https://github.com/janix374/React-Form-Validation/tree/main/src/validation
                  </Link>     
               </Typography>
           </Grid>
           <Grid item xs={12} container className="p-3">
                <Typography variant="h5" component="p">     
                    Validation rules - description
               </Typography>
               <Grid item xs={12} className="p-1">
                  <Typography variant="body1" component="p">     
                      <span className="for-rules-class">isRequired(message)</span> - check that the value is entered in the field  
                  </Typography>
                  <Typography variant="body1" component="p">     
                    message - Optional, you can add your own error message 
                  </Typography>
               </Grid>
               <Grid item xs={12} className="p-1">
                  <Typography variant="body1" component="p">     
                      <span className="for-rules-class">isEmailValid(message)</span> - email validation  
                  </Typography>
                  <Typography variant="body1" component="p">     
                    message - Optional, you can add your own error message 
                  </Typography>
               </Grid>
               <Grid item xs={12} className="p-1">
                  <Typography variant="body1" component="p">     
                      <span className="for-rules-class"> isMinLength(number, message)</span> - minimum number of characters  
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
                      <span className="for-rules-class"> isMaxLength(number, message)</span> - max number of characters  
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
                      <span className="for-rules-class">isLengthRange(minNumber, maxNumber, messageMin, messageMax)</span> - between min and max number of characters  
                  </Typography>
                  <Typography variant="body1" component="p">     
                    minNumber - minimum number of characters
                  </Typography>
                  <Typography variant="body1" component="p">     
                    maxNumber - maximum number of characters
                  </Typography>
                  <Typography variant="body1" component="p">     
                    messageMin - Optional, error message for min
                  </Typography>
                  <Typography variant="body1" component="p">     
                    messageMax - Optional, error message for max
                  </Typography>
               </Grid>
               <Grid item xs={12} className="p-1">
                  <Typography variant="body1" component="p">     
                      <span className="for-rules-class">isCustomRegExValidation(regEx, regExMessage)</span> - regular expression  
                  </Typography>
                  <Typography variant="body1" component="p">     
                    regEx - custom regular expression, for example /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/
                  </Typography>
                  <Typography variant="body1" component="p">     
                    regExMessage - error message for regular expression
                  </Typography>
               </Grid>
               <Grid item xs={12} className="p-1">
                  <Typography variant="body1" component="p">     
                      <span className="for-rules-class">isRegExValidation(regExMin, regExMax)</span> - Already a defined regular expression 
                  </Typography>
                  <Typography variant="body1" component="p">     
                    Minimum 6 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character  
                  </Typography>
               </Grid>
           </Grid>
        </Grid>
    )
}

export default Home;
