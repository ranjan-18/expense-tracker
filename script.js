let expenseList = [];
displayItems();

function budgetSet() {
    let totalBalance = parseFloat(document.getElementById('budget').value) || 0;
    let tb = document.getElementById('tb');
    tb.innerHTML = totalBalance;
    return totalBalance; // Return the budget for further use
}

function expenseSet() {
    let expend = parseFloat(document.getElementById('ex').innerHTML) || 0;

    let productTitle = document.getElementById('productTitle').value;
    let productCost = parseFloat(document.getElementById('productCost').value);

    // Push the expense entry to the list
    expenseList.push({ item: productTitle, cost: productCost });

    // Clear input fields
    document.getElementById('productTitle').value = '';
    document.getElementById('productCost').value = '';

    // Update the total expenses
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

    // Rebuild the list with updated data
    for (let i = 0; i < expenseList.length; i++) {
        let { item, cost } = expenseList[i];

        containerElement.innerHTML += `
            <tr>
                <td>${item}</td>
                <td>${cost}</td>
                <td><button class='btn-delete' onclick="deleteExpense(${i});">Delete</button></td>
            </tr>
        `;
    }
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

