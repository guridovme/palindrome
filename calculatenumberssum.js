 /*function calculateNumbersSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(calculateNumbersSum([0, 1, 2, 4, 8])); 
*/

function calculateNumbersSum(numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum;
}

console.log(calculateNumbersSum([0, 1, 2, 4, 8])); 
