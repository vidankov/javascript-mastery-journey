let maxClientsPerBill = 30;
let clientsNumber = prompt("Сколько посетителей включить в счёт?");
let allDataCorrect = true;

if (!clientsNumber) {
    alert("Необходимо указать количество гостей!");
    allDataCorrect = false;
}
else {
    clientsNumber = parseInt(clientsNumber);
}

if (isNaN(clientsNumber)) {
    alert("Количество гостей должно быть числом!")
    allDataCorrect = false;
}
else if (clientsNumber < 1) {
    alert("В счёт должен быть включён хотя бы один гость!");
    allDataCorrect = false;
}
else if (clientsNumber > maxClientsPerBill) {
    alert(`Максимальное количество гостей в счёте: ${maxClientsPerBill}`);
    allDataCorrect = false;
}

let bill = prompt("Введите сумму счёта");

if (!bill) {
    alert("Необходимо ввести сумму счёта!");
    allDataCorrect = false;
}
else {
    bill = parseFloat(bill);
}

if (isNaN(bill)) {
    alert("Сумма счёта должна быть числом!")
    allDataCorrect = false;
}
else if (bill < 0) {
    alert("Сумма счёта должна быть положительной!");
    allDataCorrect = false;
}

let tips = prompt("Сколько процентов чаевых хотите оставить?");

if (!tips) {
    tips = 0;
}
else {
    tips = parseFloat(tips);
}

if (isNaN(tips)) {
    alert("Процент чаевых должен быть числом!");
    allDataCorrect = false;
}
else if (tips < 0) {
    alert("Процент чаевых не может быть отрицательным!");
    allDataCorrect = false;
}

if (allDataCorrect) {
    let billWithTips = bill * (1 + tips / 100);
    let costPerPerson = billWithTips / clientsNumber;

    alert(`Общий счёт: ${billWithTips}\nС человека: ${costPerPerson}`);
}
else {
    alert("Пожалуйста, обновите страницу и введите корректные данные!");
}
