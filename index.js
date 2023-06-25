const addButtonNode=document.getElementById("addButton");
const inputNode=document.getElementById("palindromeInput");


addButtonNode.addEventListener("click",addButtonHandler);

function addButtonHandler() {
    
    const currentAmount = getExpenseFromUser();
    if (!currentAmount) {
    return;
    }
    console.log(currentAmount);

}


function getExpenseFromUser () {
    return parseInt (inputNode.value);
}