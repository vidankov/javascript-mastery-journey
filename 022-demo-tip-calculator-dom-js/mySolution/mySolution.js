function updateBillDisplay() {
    billAmountWithTips = calculateBillAmountWithTips(billAmount, tipsPercentage);
    billAmountWithTips = roundUpTwoDigits(billAmountWithTips);
    billAmountWithTipsDisplay.innerText = `${billAmountWithTips} руб.`;

    let amountPerPerson = calculatePaymentPerPerson(billAmountWithTips, numberOfGuests);
    amountPerPerson = roundUpTwoDigits(amountPerPerson);
    paymentPerPerson.innerText = `${amountPerPerson} руб.`;
}

function toggleTipPercentageSelectorVisibility() {
    if (tipPercentageSelectorLabel.style.display == "block") {
        tipPercentageSelectorLabel.style.display = "none";
        tipPercentageSelector.style.display = "none";
        tipsPercentage = 0;
        updateBillDisplay();
    }
    else {
        tipPercentageSelectorLabel.style.display = "block";
        tipPercentageSelector.style.display = "block";
        tipPercentageSelector.value = "10";
        tipPercentageSelectorLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
        tipsPercentage = 10;
        updateBillDisplay();
    }
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
const billAmountSelector = document.getElementById("billAmountSelector");
const numberOfGuestsSelector = document.getElementById("numberOfGuestsSelector");
const billAmountWithTipsDisplay = document.getElementById("billAmountWithTips");
const paymentPerPerson = document.getElementById("paymentPerPerson");
const tipPercentageSelectorLabel = document.getElementById("tipPercentageSelectorLabel");
const tipPercentageSelector = document.getElementById("tipPercentageSelector");

let billAmount = 0;
let billAmountWithTips = 0;
let numberOfGuests = 1;
let tipsPercentage = 0;

billAmountSelector.value = billAmount;
numberOfGuestsSelector.value = numberOfGuests;

document.getElementById("checkPayTips").addEventListener("change", toggleTipPercentageSelectorVisibility);

tipPercentageSelector.addEventListener("input", function () {
    tipPercentageSelectorLabel.innerText = `Процент чаевых: ${tipPercentageSelector.value}%`;
    tipsPercentage = parseInt(tipPercentageSelector.value);
    updateBillDisplay();
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
