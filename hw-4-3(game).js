// На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

play = confirm('Начнем игру?');
money = 0;
for (var quest in questions) {
    if (play) {
        answer = prompt(questions[quest].text + questions[quest].a + questions[quest].b + questions[quest].c + questions[quest].d + 'Введите букву варианта:');
        while ((answer != 'a') && (answer != 'b') && (answer != 'c') && (answer != 'd')) {
            answer = prompt('Вы ввели неправильный символ.\nПопробуйте еще раз.\n' + questions[quest].text + questions[quest].a + questions[quest].b + questions[quest].c + questions[quest].d + 'Введите букву варианта:');
        }
        if ((answer == questions[quest].answer) && (quest == (questions.length - 1))) {
            money += questions[quest].sum;
            alert('Вы победили!!');
            play = false;
        } else if (answer == questions[quest].answer) {
            money += questions[quest].sum;
            play = confirm('Правильно!\nВаш выигрыш: ' + money + ' рублей.\nИграем дальше?');
        } else {
            alert('Неправильный ответ!');
            money = 0;
            play = false;
        }
    } else {
        break;
    }
}
alert('Конец игры.\nВаш выигрыш: ' + money + ' рублей.');
