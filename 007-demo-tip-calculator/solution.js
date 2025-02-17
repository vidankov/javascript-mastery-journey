let clientsNumber = parseInt(prompt("—колько посетителей включить в счЄт?"));
let bill = parseFloat(prompt("¬ведите сумму счЄта"));
let tips = parseFloat(prompt("—колько процентов чаевых хотите оставить?"));

let billWithTips = bill * (1 + tips / 100);

alert();