import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
                  To validate the fields I create the function validationField(field, rules) which receives two arguments.
                  The first argument is the field for which validation is performed, and secound one is array of validation rules. 
                  Validation rules are easily added to the array.
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
                      <span className="for-rules-class">isRegExValidation(regExMin, regExMax)</span> - Already a defined function 
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
