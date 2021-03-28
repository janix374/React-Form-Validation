export default (firsField, secondField, fieldMessage) => (value) => {
    if (fieldMessage == undefined) fieldMessage = `compare fields are not equal`;
   if(firsField != secondField) {
       return `${fieldMessage}`;
   }
  }