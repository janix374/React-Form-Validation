export default (fieldMessage) => (value) => {
  if (fieldMessage == undefined) fieldMessage = 'Email adress is invalid';
    if(!/\S+@\S+\.\S+/.test(value)){
        return `${fieldMessage}`;
      }
}