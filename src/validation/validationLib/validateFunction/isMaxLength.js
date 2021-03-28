export default  (maxCharacter, fieldMessage) => (value) => {
    if (fieldMessage == undefined) fieldMessage = `Must be a maximum of ${maxCharacter} characters`;
      if(value.length > maxCharacter){
          return `${fieldMessage}`;
        }
  }