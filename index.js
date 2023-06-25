const addButtonNode = document.getElementById("addButton");
const inputNode = document.getElementById("palindromeInput");


console.log(addButtonNode);
console.log(inputNode);

addButtonNode.addEventListener("click",addButtonHandler);

function addButtonHandler() {
    
    const currentAmount = inputNode.value;
   
}

addButtonHandler();

console.log('currentAmount=',currentAmount);