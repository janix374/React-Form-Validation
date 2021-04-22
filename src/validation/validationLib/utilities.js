import isRequired from './validateFunction/isRequired';
import isEmailValid from './validateFunction/isEmailValid';
import isMinLength from './validateFunction/isMinLength';
import isMaxLength from './validateFunction/isMaxLength';
import isLengthRange from './validateFunction/isLengthRange';
import isEqual from './validateFunction/isEqual.js';
import isCustomRegExValidation from './validateFunction/isCustomRegExValidation';
import isRegExValidation from './validateFunction/isRegExValidation';
import fileMaxSizeValidation from './validateFunction/fileMaxSizeValidation';
import fileRangeSizeValidation from './validateFunction/fileRangeSizeValidation';
import fileTypeValidation from './validateFunction/fileTypeValidation';
import IsOneButtonChecked from './validateFunction/IsOneButtonChecked';

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
 
 * isLengthRange(minNumber, maxNumber, message)
  Adequate replacement for  isMinLength and isMaxLength
  minNumber - minimum number of characters
  maxNumber - maximum number of characters
  message - Optional, error message for min and max characters

 * isCustomRegExValidation(regEx, regExMessage);
  regEx - custom regular expression
  regExMessage - error message for regular expression

 // Already a defined function - Minimum 6 and maximum 15} characters, at least one uppercase letter, one lowercase letter, one number and one special character
 * isRegExValidation() 
 
 * isEqual(firsField, secondField, message)
  comparing the firsField and secondField fields to see if they are equal
  firsField - first field to compare
  secondField - secound field to compare
  message - Optional, you can add your own error message
 
 * fileMaxSizeValidation(size, message)
  max size of upload file in bytes.
  size - max size
  message - Optional, you can add your own error message
 
 * fileRangeSizeValidation(minSize, maxSize, message)
  between min and max file size.
   minSize - min size.
  maxSize - max size
  message - Optional, you can add your own error message
 
 * fileTypeValidation(allowedExtensions, message)
  File type validation.
  allowedExtensions - array of file extensions which can be uploaded
  message - Optional, you can add your own error message
 
 *  IsOneButtonChecked(message)
    At least one check box must be checked.
    message - Optional, you can add your own error message

 */

const utilities = {
    isRequired,
    isEmailValid,
    isMinLength,
    isMaxLength,
    isLengthRange,
    isEqual,
    isCustomRegExValidation,
    isRegExValidation,
    fileMaxSizeValidation,
    fileRangeSizeValidation,
    fileTypeValidation,
    IsOneButtonChecked
};

export default utilities;
