export default  (maxCharacter, fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = `Must be a maximum of ${maxCharacter} characters`;
      if(value.length > maxCharacter){
          return `${fieldMessage}`;
        }
  }