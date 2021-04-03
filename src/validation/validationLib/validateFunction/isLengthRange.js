export default (minCharacter, maxCharacter, fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = `Must be a minimum of ${minCharacter} and maximum ${maxCharacter} characters`;

    if(value.length < minCharacter || value.length > maxCharacter){
        return `${fieldMessage}`;
      }

  }