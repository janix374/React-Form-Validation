
// Minimum 6 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character
export default () => (value) => {
    const regEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/);
    if(!regEx.test(value)){
        return `Minimum 6 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character`;
      }
}