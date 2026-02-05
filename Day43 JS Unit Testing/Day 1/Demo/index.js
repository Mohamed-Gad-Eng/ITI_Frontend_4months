/**
 *
 * @returns {Number} The result of summation.
 * @param {Number} a first number to add.
 * @param {Number} b second number to add.
 **/
exports.sum = (a, b) => {
  if (typeof a == "string" || typeof b == "string")
    throw new TypeError("parameters should be numbers");
  else return a + b;
};



// 1
// function sum(a,b){
//     if(typeof a=="string" || typeof b=="string")
//         throw new TypeError("parameters should be numbers")
//     else
//     return a+b
// }

// 2
// const sum = function (a, b) {
//   if (typeof a == "string" || typeof b == "string")
//     throw new TypeError("parameters should be numbers");
//   else return a + b;
// };
// 3
// const sum = (a, b) => {
//   if (typeof a == "string" || typeof b == "string")
//     throw new TypeError("parameters should be numbers");
//   else return a + b;
// };


/**
 * Reversing string characters' order
 * @returns {String} The string after reversing.
 * @param {string} input The string to reverse.
 * @example stringReverse("Ali") => "ilA"
 **/
exports.stringReverse = (input) => {
  let result = "";
  input = input.toString();
  for (let i = input.length - 1; i >= 0; i--) {
    result += input[i];
  }
  return result;
};

/**
 * Removing duplicate elements from an array.
 * @returns {Array} The array after removing duplicate elements.
 * @param {array} array The array to remove duplicate elements from.
 * @example removeDuplicate([1,1,2,3,4,4]) => [1,2,3,4]
 **/
exports.removeDuplicate = (array) => {
  let exists = {};
  let result = [];
  let element = null;

  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if (!exists[element]) {
      result.push(element);
      exists[element] = true;
    }
  }
  return result;
};
