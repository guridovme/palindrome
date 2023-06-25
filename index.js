const buttonNode = document.getElementById('addButton');
const inputNode = document.getElementById('palindromeInput');
const outputNode = document.getElementById('palindromeOutput');

buttonNode.addEventListener('click', function (){
const palindrome = inputNode.value;
console.log(palindrome);
outputNode.innerText = palindrome;
});



