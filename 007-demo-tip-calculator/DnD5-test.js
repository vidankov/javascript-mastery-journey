alert(
    `Проверь свои знания настольной DnD пятой редакции!
В ответах набирай только одну цифру - номер варианта ответа.`
)

let maxScore = 5;
let score = 0;
let answer;

answer = prompt(
    `Какая кость урона у короткого меча?
    1) 1d4
    2) 1d6
    3) 1d8
    4) 2d4
    `
);

if (answer == "2" || answer == "2)") {
    alert("Верно!");
    score++;
}
else {
    alert("Неправильно! Привык сражаться чем-то покрупнее?=)");
}

answer = prompt(
    `Какой максимальный уровень ячейки заклинаний у
полного заклинателя 5 уровня?
    1) 3
    2) 2
    3) 4
    4) 5
    `
);

if (answer == "1" || answer == "1)") {
    alert("Верно!");
    score++;
}
else {
    alert("Ошибка! Похоже, ты предпочитаешь грубую силу?=)");
}

answer = prompt(
    `Какая скорость  передвижения (в футах) у рас маленького роста,
например, у полуросликов, гномов или дварфов?
    1) 35
    2) 30
    3) 25
    4) 20
    `
);

if (answer == "3" || answer == "3)") {
    alert("Верно!");
    score++;
}
else {
    alert("Ошибка! Кто хочет играть за коротышек, верно? Осуждаю!=)");
}

answer = prompt(
    `Как называется раса антропоморфных кошек из вселенной DnD?
    1) Каджит
    2) Табаки
    3) Фурри
    4) Табакси
    `
);

if (answer == "4" || answer == "4)") {
    alert("Верно!");
    score++;
}
else {
    alert("Ошибка! Ты перепутал вселенную, друг=)");
}

answer = prompt(
    `Как называется заклинание 0 уровня?
    1) Ритуал
    2) Заговор
    3) Формула
    4) Приворот
    `
);

if (answer == "2" || answer == "2)") {
    alert("Верно!");
    score++;
}
else {
    alert("Ошибка! Всё-таки сыграй как-нибудь на заклинателе, это не так сложно, как кажется=)");
}

let correctAnswersPercentage = score / maxScore * 100;

alert(`Правильных ответов ${correctAnswersPercentage}%\nИли ${score} из ${maxScore}`);

if (score == 0) {
    alert("Слушай, DnD это правда весело, попробуй как-нибудь!");
}
else if (score <= 2) {
    alert("Давно не играл? Или только вливаешься? В любом случае, не расстраивайся!");
}
else if (score <= 4) {
    alert("Неплохо! Квест выполнен, запиши +100 экспы!");
}
else {
    alert("Браво! Готов убить очередного дракона?");
}