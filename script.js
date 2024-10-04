let expenseList = [];
displayItems();

function budgetSet() {
    let totalBalance = parseFloat(document.getElementById('budget').value) || 0;
    document.getElementById('tb').innerHTML = totalBalance;
    return totalBalance;
}

function expenseSet() {
    let expend = parseFloat(document.getElementById('ex').innerHTML) || 0;

    let productTitle = document.getElementById('productTitle').value;
    let productCost = parseFloat(document.getElementById('productCost').value);

    
    expenseList.push({ item: productTitle, cost: productCost });

    
    document.getElementById('productTitle').value = '';
    document.getElementById('productCost').value = '';

    
    expend += productCost;
    document.getElementById('ex').innerHTML = expend;

    // Update the remaining budget
    let totalBalance = budgetSet();
    let avlBalance = totalBalance - expend;
    document.getElementById('amt').innerHTML = avlBalance;

    displayItems();  // Refresh the list display
}

function displayItems() {
    let containerElement = document.querySelector('.expense-list');
    containerElement.innerHTML = '';  // Clear the current list before re-rendering

    for (let i = 0; i < expenseList.length; i++) {
        let { item, cost } = expenseList[i];

        containerElement.innerHTML += `
            <div>${item}</div>
            <div>${cost}</div>
            <div><button class='btn-delete' onclick="deleteExpense(${i});">Delete</button></div>
        `;
    }
}

function deleteExpense(index) {
   
    let costToRemove = expenseList[index].cost;
    expenseList.splice(index, 1);  

  
    let newTotalExpense = expenseList.reduce((total, expense) => total + expense.cost, 0);
    document.getElementById('ex').innerHTML = newTotalExpense;

    
    let totalBalance = budgetSet();
    let avlBalance = totalBalance - newTotalExpense;
    document.getElementById('amt').innerHTML = avlBalance;

 
    displayItems();
}
