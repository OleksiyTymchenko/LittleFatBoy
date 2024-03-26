/* 1
let hello = 'Hello';
let name = prompt('What is your name?');

alert(`${hello}                  ${name}`);*/

/*2
let year = 2024;
let birthYear = prompt('When do you born?');
let age = year - birthYear;
alert(`Ваш вік - ${age}`);
*/

/*3
let side = prompt('Please, enter your number');
let square = side * side;

alert(`${square}`)
*/
/*4
let r = prompt('Enter radius')

let S = 3.14*(r*r); 
alert(`${S}`);
*/

//5) Запитай у користувача відстань в кілометрах між двома містами і за
// скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно
// рухатися, щоб встигнути вчасно.
/*
let length = prompt(`Which a distance?`);
let time = prompt(`Enter time for road`);

let answer = length / time;

alert(`Your speed should be - ${answer}`)
*/

/* 6)Реалізуй конвертор валют. Користувач вводить долари,
 програма переводить їх в євро. Курс валют зберігається в константі.
 *//*
const cost = 41.5;

let number = prompt(`Please enter hom much euros do you have`);

let answer = number * cost;

alert(`In grivnas you have - ${answer}`)*/

/*lesson 30*/

// 1) Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

// let sum = 0.1 + 0.2;

//2) Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні
// бути в змінних), добийся математично правильної відповіді.
/*
let one = `1`;

let two = 2;

let sum = +one + two;

alert(`${sum}`)*/

/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати 
скільки файлів розміром в 820 Мб поміщається на флешку. 

let answer = Math.floor((1024 * value)/820);



alert(`${answer}`);*/

/*
    Користувач вводить суму грошей в гаманці і ціну
     однієї шоколадки. Програма виводить скільки шоколадок 
     може купити користувач і скільки здачі у нього залишиться.


let sumOfMoney = prompt(`Please enter your number of money`);

let price = 33;

let answer = Math.floor(sumOfMoney/price);

let change = Math.floor((answer)%2);

alert(`You can bue - ${answer} chocolates, 
money which you have ${change}`);
*/

//Запитай у користувача його вік і визначи, 
//ким він є: дитиною (0-11), підлітком (12-17), дорослим
/*let age = prompt('Your age?');

if(0 <= age  && age <= 11){
    alert(' дитина');
}else if(12 <= age  && age <= 17){
    alert(' підліток');
}else if(18 <= age  && age < 120){
    alert(' дорослий');
}else{
    alert(' Веедено не вірне число');
}*/

//Запитай у користувача число від 0 до 9 і 
//виведи йому спецсимвол, який розташований
// на цій клавіші (1 !, 2 @, 3 # і т. д)
/*let symbol = prompt('Your symbol?');

if(symbol == 1){
    alert('!');
}else if(symbol == 2){
    alert('@');
}else if(symbol == 3){
    alert('#');
}*/

// let currentSlide = 0;
// const slider = document.getElementById('slider');
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//   if (index >= 0 && index < slides.length) {
//     currentSlide = index;
//     const offset = -index * 100;
//     slider.style.transform = `translateX(${offset}%)`;
//   }
// }

// function nextSlide() {
//   showSlide(currentSlide + 1);
// }

// function prevSlide() {
//   showSlide(currentSlide - 1);
// }

// function autoSlide() {
//   nextSlide();
// }

// // Автоматичне прокручування слайдів кожні 3 секунди
// setInterval(autoSlide, 3000);

// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });