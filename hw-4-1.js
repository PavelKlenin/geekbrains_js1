/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы
должны получить на выходе объект, в котором в соответствующих свойствах описаны
единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

var num = parseInt(prompt('Введите число от 0 до 999: '));
var number = {};

function numToObj(num) {
    if (num > 999 || num < 0 || isNaN(num)) {
        console.log('Некорректный ввод!');
        return number == null;
    } else {
        numStr = String(num);
        numArr = numStr.split('');
        while (numArr.length < 3) {
            numArr.unshift('0');
        }
        number.sot = parseInt(numArr[0]);
        number.des = parseInt(numArr[1]);
        number.ed = parseInt(numArr[2]);
        return number;
    }
}

numToObj(num);
console.log(number);
