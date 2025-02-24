function createTipPercentageSelector() {
    const tipPercentageSelector = document.createElement("input");
    tipPercentageSelector.setAttribute("type", "range");
    tipPercentageSelector.setAttribute("min", "10");
    tipPercentageSelector.setAttribute("max", "50");
    tipPercentageSelector.setAttribute("step", "5");
    tipPercentageSelector.setAttribute("value", "10");
    return tipPercentageSelector;
}

function setEventListenerToTipPercentageSelector(tipPercentageSelector, tipOptionLabel) {
    tipPercentageSelector.addEventListener("input", function () {
        tipOptionLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
        tipsPercentage = parseInt(tipPercentageSelector.value);
        updateBillDisplay();
    });
    tipOptionLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
}

function updateBillDisplay() {
    billAmountWithTips = calculateBillAmountWithTips(billAmount, tipsPercentage);
    billAmountWithTips = roundUpTwoDigits(billAmountWithTips);
    billAmountWithTipsDisplay.innerText = `${billAmountWithTips} руб.`;

    let amountPerPerson = calculatePaymentPerPerson(billAmountWithTips, numberOfGuests);
    amountPerPerson = roundUpTwoDigits(amountPerPerson);
    paymentPerPerson.innerText = `${amountPerPerson} руб.`;
}

function validateBillAmountValue(billAmountValue) {
    if (billAmountValue < 0) {
        alert("Сумма счёта не может быть меньше нуля!");
        return 0;
    }
    return billAmountValue;
}

function validateNumberOfGuests(numberOfGuestsValue) {
    if (numberOfGuestsValue < 1) {
        alert("В счёт должен быть включён хотя бы один гость!");
        return 1;
    }
    else if (numberOfGuestsValue > 30) {
        alert("Максимальное количество гостеё в счёте: 30!");
        return 30;
    }
    return numberOfGuestsValue;
}

function calculateBillAmountWithTips(billAmount, tipsPercentage) {
    return billAmount * (1 + tipsPercentage / 100);
}

function calculatePaymentPerPerson(BillAmountWithTips, numberOfGuests) {
    return BillAmountWithTips / numberOfGuests;
}

function roundUpTwoDigits(number) {
    // округление до 2 знаков после запятой:
    return Math.round((number + Number.EPSILON) * 100) / 100;
}

const billInput = document.getElementById("billInput");
const tipOptionLabel = document.createElement("label");
const billAmountSelector = document.getElementById("billAmountSelector");
const numberOfGuestsSelector = document.getElementById("numberOfGuestsSelector");
const billAmountWithTipsDisplay = document.getElementById("billAmountWithTips");
const paymentPerPerson = document.getElementById("paymentPerPerson");

let billAmount = 0;
let billAmountWithTips = 0;
let numberOfGuests = 1;
let tipsPercentage = 0;

billAmountSelector.value = billAmount;
numberOfGuestsSelector.value = numberOfGuests;

document.getElementById("checkPayTips").addEventListener("change", function () {
    if (this.checked) {
        const tipPercentageSelector = createTipPercentageSelector();
        setEventListenerToTipPercentageSelector(tipPercentageSelector, tipOptionLabel);

        billInput.appendChild(tipOptionLabel);
        billInput.appendChild(tipPercentageSelector);

        tipsPercentage = 10;
        updateBillDisplay()
    } else {
        billInput.removeChild(billInput.lastChild);
        billInput.removeChild(billInput.lastChild);

        tipsPercentage = 0;
        updateBillDisplay()
    }
});

billAmountSelector.addEventListener("change", function () {
    billAmount = validateBillAmountValue(billAmountSelector.value);
    billAmount = parseFloat(billAmount);
    billAmountSelector.value = billAmount;
    updateBillDisplay()
});

numberOfGuestsSelector.addEventListener("change", function () {
    numberOfGuests = validateNumberOfGuests(numberOfGuestsSelector.value);
    numberOfGuests = parseInt(numberOfGuests);
    numberOfGuestsSelector.value = numberOfGuests;

    let amountPerPerson = calculatePaymentPerPerson(billAmountWithTips, numberOfGuests);
    amountPerPerson = roundUpTwoDigits(amountPerPerson);
    paymentPerPerson.innerText = `${amountPerPerson} руб.`;
});
