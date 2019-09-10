function getNumbers(str){
    var regex = /\d+/g;
    return str.match(regex);
   }
   
export {getNumbers};