function getText(elementId) {
    const findElementText = document.getElementById(elementId).innerText;
    return findElementText;
}
function getValue(elementId) {
    const findElementValue = document.getElementById(elementId).value;
    return findElementValue;
}

// Calculate Button >>

document.getElementById("calculate-btn").addEventListener("click", function () {
    const incomeString = getValue("income")
    const income = parseInt(incomeString);
    if (income < 0 || isNaN(income)) {
        document.getElementById("income").style.border = "2px solid red";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("balance").innerText = "";
        alert("Input can't be a negative number or empty.")
    }
    else {
        document.getElementById("income").style.border = "";
        let costField = document.querySelectorAll(".cost-field");
        let totalCost = 0;
        let isWrongInput = false;

        for (let i = 0; i < costField.length; i++) {
            let inputValueString = costField[i].value;
            let inputValue = parseInt(inputValueString);
            if (inputValue < 0 || isNaN(inputValue)) {
                costField[i].style.border = "2px solid red";
            }
            else {
                costField[i].style.border = "";
            }
        }
        for (let i = 0; i < costField.length; i++) {
            let inputValueString = costField[i].value;
            let inputValue = parseInt(inputValueString);
            if (inputValue < 0 || isNaN(inputValue)) {
                isWrongInput = true;
                document.getElementById("total-expense").innerText = "";
                document.getElementById("balance").innerText = "";
                alert("Your Input can't be a negative value.");
                break;
            }
            else {
                totalCost += inputValue;
            }
        }

        if (isWrongInput === false) {
            document.getElementById("total-expense").innerText = totalCost;
            if (income < totalCost) {
                document.getElementById("total-expense").style.color = "red";
                alert("Cut your coat according to your cloths");
            }
            else {
                let balance = income - totalCost;
                document.getElementById("balance").innerText = balance;
                document.getElementById("total-expense").style.color = "";
                document.getElementById("balance").parentElement.style.color = "";
            }
        }
    }
})

// Save Button >>

document.getElementById("save-btn").addEventListener("click", function () {
    const saveValue = getValue("save")
    const save = parseFloat(saveValue);

    if (save < 0 || isNaN(save)) {
        document.getElementById("save").style.border = "2px solid red";
        document.getElementById("saving-amount").innerText = "";
        document.getElementById("remaining-balance").innerText = "";
        alert("Input can't be a negative value or empty.")
    }
    else {
        const percentage = save / 100;
        const incomeString = getValue("income")
        const income = parseInt(incomeString);

        if (income < 0 || isNaN(income)) {
            document.getElementById("income").style.border = "2px solid red";
            alert("Input can't be a negative number or empty.")
        }
        else {
            const totalSave = income * percentage;
            const balanceInnerText = getText("balance")
            const balance = parseInt(balanceInnerText);

            if (balance < 0 || isNaN(balance)) {
                document.getElementById("balance").parentElement.style.color = "red";
                alert("Please calculate your balance first.")
            }
            else {
                document.getElementById("saving-amount").innerText = totalSave;
                const remainingBalance = balance - totalSave;
                document.getElementById("remaining-balance").innerText = remainingBalance;
                document.getElementById("save").style.border = "";
                document.getElementById("income").style.border = "";
                document.getElementById("balance").parentElement.style.color = "";
            }
        }
    }
})