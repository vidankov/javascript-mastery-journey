function createTipPercentageSelector() {
    const tipPercentageSelector = document.createElement("input");
    tipPercentageSelector.setAttribute("type", "range");
    tipPercentageSelector.setAttribute("min", "10");
    tipPercentageSelector.setAttribute("max", "50");
    tipPercentageSelector.setAttribute("step", "10");
    tipPercentageSelector.setAttribute("value", "10");
    return tipPercentageSelector;
}

function setEventListenerToTipPercentageSelector(tipPercentageSelector, tipOptionLabel) {
    tipPercentageSelector.addEventListener("change", function () {
        tipOptionLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
    });
    tipOptionLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
}

function validateBillAmountValue(billAmountValue) {
    //
}

function validateNumberOfGuests(numberOfGuestsValue) {
    //
}

function calculateBillAmountWithTips(billAmount, tipsPercentage) {
    return billAmount * (1 + tipsPercentage / 100);
}

function calculatePaymentPerPerson(BillAmountWithTips, numberOfGuests) {
    return BillAmountWithTips / numberOfGuests;
}

const billInput = document.getElementById("billInput");
const tipOptionLabel = document.createElement("label");
const billAmountSelector = document.getElementById("billAmountSelector");
const numberOfGuestsSelector = document.getElementById("numberOfGuestsSelector");
const billAmountWithTips = document.getElementById("billAmountWithTips");
const paymentPerPerson = document.getElementById("paymentPerPerson");

let billAmount = 0;
let numberOfGuests = 1;
let tipsPercentage = 0;

document.getElementById("checkPayTips").addEventListener("change", function () {
    if (this.checked) {
        const tipPercentageSelector = createTipPercentageSelector();
        setEventListenerToTipPercentageSelector(tipPercentageSelector, tipOptionLabel);

        billInput.appendChild(tipOptionLabel);
        billInput.appendChild(tipPercentageSelector);
    } else {
        billInput.removeChild(billInput.lastChild);
        billInput.removeChild(billInput.lastChild);
    }
});

billAmountSelector.addEventListener("change", function () {
    // validateBillAmountValue(billAmountSelector.value);
    billAmount = billAmountSelector.value;
});

numberOfGuestsSelector.addEventListener("change", function () {
    // validateNumberOfGuests(numberOfGuestsSelector.value);
    numberOfGuests = numberOfGuestsSelector.value;
});
