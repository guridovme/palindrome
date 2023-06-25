const buttonNode = document.getElementById('addButton');
const inputNode = document.getElementById('palindromeInput');

buttonNode.addEventListener('click', function (){
const palindrome = inputNode.value;
console.log(palindrome);
});