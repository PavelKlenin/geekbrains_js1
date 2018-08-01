document.write("<hr>1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100<hr><br>");


i = 2;
num = 1;
arr_simple = [];
while (num <= 100) {
    while (i <= Math.ceil(Math.sqrt(num))) {
        if (num % i != 0) {
            i++;
        } else {
            break;
        }
    }
    if (i > Math.ceil(Math.sqrt(num))) {
        arr_simple.push(num);
    }
    i = 2;
    num++;
}
document.write(arr_simple);

document.write("<br><br><hr>2. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.<br>Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета<br>стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве.<br>2.1. Организуйте такой массив для хранения товаров в корзине<br>2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.<br><hr><br>");


var a = 1000;
var b = 2000;
var c = 3000;

var basket = [a, b, c];

function countBasketPrice(arr) {
    var price = 0;
    for (var el in arr) {
        price += basket[el];
    }
    return price;
}

document.write("Total price = " + countBasketPrice(basket));


document.write("<br><br><hr>3. Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть<br>выглядеть должно вот так:for(…){// здесь пусто}<br><hr><br>");

for (var i = 0; i < 10; document.write(i++ + " ")) {}

document.write("<br><br><hr><br>")

console.log("4. Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5");

str = "";
for (var i = 1; i <= 20; i++) {
    str += "x";
    console.log(str);
    console.log("");
}
