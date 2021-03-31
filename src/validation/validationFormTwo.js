import validationField from './validationLib/validationField';
import utilities from './validationLib/utilities';
const { isRequired, isEmailValid, isLengthRange, isRegExValidation } = utilities;

function validation(values) {
  const { email, password, username } = values;
  let errors = {}

// email validation
  const emailCheck = validationField(email, [
    isRequired(),
    isEmailValid()
  ]);

  if(emailCheck){
    errors.email = emailCheck;
  }

  // password validation
  const passwordCheck = validationField(password,[
    isRequired('Password is required'),
    isRegExValidation()
  ])

  if(passwordCheck){
    errors.password = passwordCheck;
  }

  // username validation
  const usernameCheck = validationField(username,[
    isRequired('User name is required'),
    isLengthRange(5,15)
  ])

  if(usernameCheck){
    errors.username = usernameCheck;
  }

  return errors;
}

export default validation;