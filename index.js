const inputNode=document.getElementById('palindromeInput');
const addButtonNode=document.getElementById("addButton");

function getPalindromeFromUser () {
    return parseInt (inputNode.value);
}

function addButtonHandler() {
    
    const currentAmount = getPalindromeFromUser();
    if (!currentAmount) {
    return;
    }

    console.log(currentAmount);

    
    
}

addButtonNode.addEventListener("click",addButtonHandler);



// document.getElementById('addButton').onclick = getInput();

// function getInput (){
//     let a = document.getElementById('palindromeInput').value;
//     console.log(a);
// };