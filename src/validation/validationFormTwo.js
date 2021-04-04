import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';
const { isRequired, isEmailValid, isLengthRange, isRegExValidation } = utilities;

function validation(values) {
  const { email, password, username } = values;
  let fields = {}

// email validation
fields.email = validationField(email, [
    isRequired(),
    isEmailValid()
  ]);


  // password validation
  fields.password = validationField(password,[
    isRequired('Password is required'),
    isRegExValidation()
  ])


  // username validation
  fields.username = validationField(username,[
    isRequired('User name is required'),
    isLengthRange(5,15)
  ]);

  let errors = clean(fields);
  return errors;
}

export default validation;