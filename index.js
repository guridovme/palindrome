const buttonNode = document.getElementById('addButton');
const inputNode = document.getElementById('palindromeInput');
const outputNode = document.getElementById('palindromeOutput');

buttonNode.addEventListener('click', function (){
const palindrome = inputNode.value;
console.log(palindrome);
outputNode.innerText = palindrome;
});



function multiple (){
    const a = 2;
    const b = 2;
    multipleResult = a*b;
    console.log('Multiple Result', a , '*', b ,'=', multipleResult);

}