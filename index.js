const addButtonNode=document.getElementById("addButton");
const inputNode=document.getElementById("palindromeInput");


addButtonNode.addEventListener("click",addButtonHandler);

function addButtonHandler() {
    
    const currentAmount = getExpenseFromUser();
    if (!currentAmount) {
    return;
    }

    
    const currentCategory = getSelectedCategory();

    
    if (currentCategory === "Категория") {
    
    return;
    }
 
    
    const newExpense = {amount: currentAmount, category: currentCategory};
    console.log(newExpense);

    
    expenses.push(newExpense);
    
    render();

    
    clearInput(inputNode);
}


function getExpenseFromUser () {
    return parseInt (inputNode.value);
}