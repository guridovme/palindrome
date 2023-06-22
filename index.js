const palindromeInputNode=document.getElementById("palindromeInput");
const addButtonNode=document.getElementById("addButton");

function getPalindromeFromUser () {
    return parseInt (palindromeInputNode);
}


//function palindrome

// функция-обработчик, которая будет вызвана при нажатии на кнопку Добавить
function addButtonHandler() {
    // сохранияем в переменную currentAmount введенную сумму
    const currentPalindrome = getPalindromeFromUser();
    if (!currentPalindrome) {
    return;
    }

 

}


// Привязка функций-обработчиков к кнопкам
addButtonNode.addEventListener("click",addButtonHandler);
