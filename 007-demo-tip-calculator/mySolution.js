let maxClientsPerBill = 30;
let clientsNumber = prompt("Сколько посетителей включить в счёт?");

if (!clientsNumber) {
    alert("Необходимо указать количество гостей!");
}

clientsNumber = parseInt(clientsNumber);

if (isNaN(clientsNumber)) {
    alert("Количество гостей должно быть числом!")
}
else if (clientsNumber < 1) {
    alert("В счёт должен быть включён хотя бы один гость!");
}
else if (clientsNumber > maxClientsPerBill) {
    alert(`Максимальное количество гостей в счёте: ${maxClientsPerBill}`);
}



let bill = parseFloat(prompt("Введите сумму счёта"));
let tips = parseFloat(prompt("Сколько процентов чаевых хотите оставить?"));


let billWithTips = bill * (1 + tips / 100);
let costPerPerson = billWithTips / clientsNumber;

alert(`Общий счёт: ${billWithTips}\nС человека: ${costPerPerson}`);
