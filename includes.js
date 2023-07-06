const numbers = [0, 1, 2, 4, 8];
const number = 10;

function includes(numbers, number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      return true;
    }
  }

  return false;
}
console.log (includes(numbers, number));
