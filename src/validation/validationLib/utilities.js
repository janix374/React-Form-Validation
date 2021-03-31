import isRequired from './validateFunction/isRequired';
import isEmailValid from './validateFunction/isEmailValid';
import isMinLength from './validateFunction/isMinLength';
import isMaxLength from './validateFunction/isMaxLength';
import isLengthRange from './validateFunction/isLengthRange';
import isEqual from './validateFunction/isEqual.js';
import isCustomRegExValidation from './validateFunction/isCustomRegExValidation';
import isRegExValidation from './validateFunction/isRegExValidation';

/**
 * validationObject
 
 * isRequired(message) 
  message - Optional, a value for field error message
 
 * isEmailValid(message) 
  message - Optional, a value for email error message
 
 * isMinLength(number, message)
  number - min number of characters
  message - Optional, error message
 
 * isMaxLength(number, message)
  number - max number of characters
  message - Optional, error message
 
 * isLengthRange(minNumber, maxNumber, messageMin, messageMax)
  Adequate replacement for  isMinLength and isMaxLength
  minNumber - minimum number of characters
  maxNumber - maximum number of characters
  messageMin - Optional, error message for min
  messageMax - Optional, error message for max
 
 * isCustomRegExValidation(regEx, regExMessage);
  regEx - custom regular expression
  regExMessage - error message for regular expression

 // Already a defined function - Minimum 6 and maximum 15} characters, at least one uppercase letter, one lowercase letter, one number and one special character
 * isRegExValidation() 
 * 
 */

const utilities = {
    isRequired,
    isEmailValid,
    isMinLength,
    isMaxLength,
    isLengthRange,
    isEqual,
    isCustomRegExValidation,
    isRegExValidation
  }

  export default utilities;