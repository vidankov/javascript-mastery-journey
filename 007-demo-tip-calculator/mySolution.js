let clientsNumber = parseInt(prompt("Сколько посетителей включить в счёт?"));
let bill = parseFloat(prompt("Введите сумму счёта"));
let tips = parseFloat(prompt("Сколько процентов чаевых хотите оставить?"));

let billWithTips = bill * (1 + tips / 100);
let costPerPerson = billWithTips / clientsNumber;

alert(`Общий счёт: ${billWithTips}\nС человека: ${costPerPerson}`);
