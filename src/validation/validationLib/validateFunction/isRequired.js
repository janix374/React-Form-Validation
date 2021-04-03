export default (fieldMessage = null) => (value) => {
  if (fieldMessage == null) fieldMessage = 'This field is required';
    if(!value){
        return `${fieldMessage}`;
      }
}