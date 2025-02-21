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

const billInput = document.getElementById("billInput");
const tipOptionLabel = document.createElement("label");

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
