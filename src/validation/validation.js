export default function validationInfo(values) {
    let errors = {};
    validateUsername(values.username, errors);
    validateEmail(values.email, errors);
    validatePassword(values.password, errors);
    validateConfirmPassword(values.password, values.confirmpassword, errors)
    return errors
}

// username validators
function validateUsername(username, errors) {
    let usernameTrim = username.trim();
  if(!usernameTrim){
      errors.username = 'Username is require';
  } else if (usernameTrim.length < 3) {
    errors.username = 'Username must be more than 3 characters';
  } else if (usernameTrim.length > 20){
    errors.username = 'Username must be less than 20 characters'; 
  }
}

// email validators
function validateEmail(email, errors) {
    let emailValidation = /\S+@\S+\.\S+/.test(email);
  if(!email){
      errors.email = 'Email is require';
  } else if (!emailValidation) {
    errors.email = 'Email address is invalid';
  } 
}

//password validation
function validatePassword(password, errors) {
    if(!password){
        errors.password = 'Password is require';
    } else if (password.length < 4) {
      errors.password = 'Username must be more than 4 characters';
    } else if (password.length > 20){
      errors.password = 'Username must be less than 20 characters'; 
    }
}

//confirm password validation
function validateConfirmPassword(password, confirmpassword, errors) {
    if(!confirmpassword){
        errors.confirmpassword = 'Confirm Password is require';
    } else if (password !== confirmpassword) {
        errors.confirmpassword = 'Passwords do not match';
    }
}




