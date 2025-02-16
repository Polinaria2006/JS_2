 //задача 1
 const str = "abce";
 console.log(str[0]);
 console.log(str[1]);
 console.log(str[3]);

//задача 2

let number1 = parseInt(prompt("Введите первое число", "Напишите его пожалуйста"));
let number2 = parseInt(prompt("Введите второе число", "Напишите его пожалуйста"));
console.log(number1 > 0 || number2 > 0);

//задача 3

let age = parseInt(prompt("Введите свой возвраст", "Напишите его"));
if (age >= 18) {
 console.log("Вы совершеннолетний, поздравляем!");
} else {
 console.log("Вы несовершеннолеьний, к сожалению.");
}