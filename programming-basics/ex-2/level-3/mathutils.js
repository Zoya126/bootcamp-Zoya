


function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  
  function multiply(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
  }
  
  
  module.exports = { add, multiply };
  