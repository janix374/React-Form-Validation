export default (firsField, secondField, fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = `compare fields are not equal`;
   if(firsField != secondField) {
       return `${fieldMessage}`;
   }
  }