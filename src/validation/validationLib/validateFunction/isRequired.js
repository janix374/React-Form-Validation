export default (fieldMessage) => (value) => {
  if (fieldMessage == undefined) fieldMessage = 'This field is required';
    if(!value){
        return `${fieldMessage}`;
      }
}