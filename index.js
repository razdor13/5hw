//!1
const exchangeRate = 40; // Курс долара до гривні: 1 долар = 40 гривень

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} долар(ів) = ${uah} гривень`);
}

//!2
const firstNumber = prompt("Введіть ціле число");
if (firstNumber === null) {
    alert("ок...");
} else if (
    isNaN(firstNumber) ||
    !firstNumber.trim() ||
    +firstNumber === 0 ||
    +firstNumber === 1
) {
    alert("ви нічого не ввели або ввели 1 чи 0 а це не прості числа");
} else if (!Number.isInteger(+firstNumber) || +firstNumber < 0) {
    alert("невірне число");
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

let twonumber = prompt("Введіть число");

if (twonumber === null) {
    alert("ок...");
} else if (isNaN(twonumber) || !twonumber.trim()) {
    alert("де число?");
} else if (!Number.isInteger(+twonumber) || +twonumber < 0) {
    alert("невірне число");
} else {
    const base = 3;
    let result = 1;
    while (result < +twonumber) {
        result *= base;
    }

    if (result === +twonumber || +twonumber === 1) {
        alert("Так, це число можна отримати як деяку ступінь числа 3");
    } else {
        alert("Неможливо отримати це число як ступінь числа 3");
    }
}
