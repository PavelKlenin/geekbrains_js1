/*
1)
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - "++" - префиксный оператор: сначала а увеличивается на 1 (а==2), затем присваивается значение с (с==2) 
d = b++; alert(d); // 1 - "++" - постфиксный оператор: сначала присваивается значение d (d==1), затем b увеличивается на 1 (b==2)
c = (2+ ++a); alert(c); // 5 - "++" - префиксный оператор: сначала а увеличивается на 1 (а==3), затем к 2 прибавляется 3 (с==5)
d = (2+ b++); alert(d); // 4 - "++" - постфиксный оператор: сначала к 2 прибавляется b (d==4), затем b увеличивается на 1 (b==3)
alert(a); // 3
alert(b); // 3
*/
/*
2)
var a = 2;
var x = 1 + (a *= 2); // x = 1 + (a = a * 2) = 1 + (2 * 2) = 5
*/
/*
3)
var a = parseInt(prompt('Введите а:'));
var b = parseInt(prompt('Введите b:'));

if (a >= 0 && b >= 0) {
    alert('a - b = ' + (a - b));
}
else if (a < 0 && b < 0) {
        alert ('a * b = ' + (a * b));
}
else {
    alert ('a + b = ' + (a + b));
}
*/
/*
4)
var a = Math.round(Math.random() * 15);
alert(a);
switch (a) {
    case 0:
        alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 1:
        alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 2:
        alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 3:
        alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 4:
        alert('4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 5:
        alert('5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 6:
        alert('6 7 8 9 10 11 12 13 14 15');
        break;
    case 7:
        alert('7 8 9 10 11 12 13 14 15');
        break;
    case 8:
        alert('8 9 10 11 12 13 14 15');
        break;
    case 9:
        alert('9 10 11 12 13 14 15');
        break;
    case 10:
        alert('10 11 12 13 14 15');
        break;
    case 11:
        alert('11 12 13 14 15');
        break;
    case 12:
        alert('12 13 14 15');
        break;
    case 13:
        alert('13 14 15');
        break;
    case 14:
        alert('14 15');
        break;
    case 15:
        alert('15');
        break;
}
*/

/*
5)

function sum(x, y) {
    return (x + y);
}

function sub(x, y) {
    return (x - y);
}

function multi(x, y) {
    return (x * y);
}

function div(x, y) {
    return (x / y);
}


//6)

function operation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert('arg1 + arg2 = ' + sum(arg1, arg2));
            break;
        case '-':
            alert('arg1 - arg2 = ' + sub(arg1, arg2));
            break;
        case '*':
            alert('arg1 * arg2 = ' + multi(arg1, arg2));
            break;
        case '/':
            alert('arg1 / arg2 = ' + div(arg1, arg2));
            break;
        default:
            alert('Неправильный ввод');
    }
}

var a = parseInt(prompt('Введите arg1:'));
var b = parseInt(prompt('Введите arg2:'));
var oper = prompt('Введите операцию (+, -, *, /):');

operation(a, b, oper);

*/

/*
7)
null == 0; //false, значения null и undefined равны == друг другу и не равны чему бы то ни было ещё
*/

/*
8)
*/

function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    return res = val * power(val, pow - 1);
}

alert(power(3, 3));

*/
