import validationField from './validationLib/validationField';
import validationfunctions from './validationLib/utilities';
const { isRequired, isEmailValid, isMinLength, isLengthRange, isEqual } = validationfunctions;

function validation(values) {
  const { email, password, username, confirmpassword } = values;
  let errors = {}

//email validation
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
    isMinLength(6)
  ])

  if(passwordCheck){
    errors.password = passwordCheck;
  }

   // confirmpassword validation
   const confirmpasswordCheck = validationField(confirmpassword,[
    isRequired(),
    isEqual(password, confirmpassword, 'Password and confirm password are not equal!')
  ]);

  if(confirmpasswordCheck){
    errors.confirmpassword = confirmpasswordCheck;
  }

  // username validation
  const usernameCheck = validationField(username,[
    isRequired('User name is required'),
    isLengthRange(3,20)
  ])

  if(usernameCheck){
    errors.username = usernameCheck;
  }

  return errors;
}

export default validation;