export default (minCharacter, maxCharacter, fieldMessageMin, fieldMessageMax) => (value) => {
    if (fieldMessageMin == undefined) fieldMessageMin = `Must be a minimum of ${minCharacter} characters`;
    if (fieldMessageMax == undefined) fieldMessageMax = `Must be a maximum of ${maxCharacter} characters`;

    if(value.length < minCharacter){
        return `${fieldMessageMin}`;
      }
   
    if(value.length > maxCharacter){
        return `${fieldMessageMax}`;
    }
  }