export default  (minCharacter, fieldMessage) => (value) => {
  if (fieldMessage == undefined) fieldMessage = `must be at least ${minCharacter} characters`;
    if(value.length < minCharacter){
        return `${fieldMessage}`;
      }
}