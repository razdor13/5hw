//!1
const exchangeRate = 40; // Курс долара до гривні: 1 долар = 40 гривень

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let uah = dollars * exchangeRate;
    console.log(`${dollars} долар(ів) = ${uah} гривень`);
}

//!2
let firstNumber = +prompt("Введіть  число");

while (firstNumber < 0 || isNaN(firstNumber) || !firstNumber) {
    firstNumber = +prompt("Будь ласка, введіть коректне  число (тільки цифри)");
}

if (firstNumber <= 1) {
    alert("Число не є простим, бо це 1 або менше ");
} else if (firstNumber === 2) {
    alert("2 це просте число");
} else {
    let isPrime = true; // Початково вважаємо число простим
    for (let i = 2; i < firstNumber; i++) {
        if (firstNumber % i === 0) {
            isPrime = false; // Якщо знайдено дільник, число не є простим
            break;
        }
    }

    if (isPrime) {
        alert(`${firstNumber} - просте число`);
    } else {
        alert("Число не є простим, бо має дільники окрім 1 та себе");
    }
}
//!3

let twonumber = +prompt("Введіть число");

while (twonumber < 0 || isNaN(twonumber) || !twonumber) {
    twonumber = +prompt("Будь ласка, введіть коректне число (тільки цифри)");
}

if (twonumber === 1) {
    alert("Число 1 не можна отримати як ступінь числа 3");
} else {
    let base = 3;
    let result = 1;
    while (result < twonumber) {
        result *= base;
    }

    if (result === twonumber) {
        alert("Так, це число можна отримати як деяку ступінь числа 3");
    } else {
        alert("Неможливо отримати це число як ступінь числа 3");
    }
}
//!4
