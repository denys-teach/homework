//Odnosum Denys, Group: JS9_Online
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
/* {
    let weight = '88.3';
    let height = '1.75';

    const bmi = (weight / height**2).toFixed(1);
    console.log(bmi); // 28.8
} */

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

/* {
    function rounded(number){
        console.log(`Math.floor(${number}): `,Math.floor(number));
        console.log(`Math.ceil(${number}): `, Math.ceil(number));
        console.log(`Math.round(${number}): `, Math.round(number));
    }
    rounded(27.3);
    rounded(27.9);
} */

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

/* {
    function totalMinutes(minutes){
        let HH = Math.floor(minutes / 60);
        let MM = minutes % 60;
        if(MM<10){
            MM = '0' + MM;
        }
        console.log(`minutes ${minutes}, time in format HH:MM: ${HH}:${MM}`);
    }
    totalMinutes(70);
    totalMinutes(450);
    totalMinutes(1441);
} */

/* 
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */

/* {
    const a = prompt('Enter the number: ')
    console.log(`result prompt: ${a}`);
} */

/* 
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */
/* {
    const b = Number(prompt('Введите число b: '));
    const c = Number(prompt('Введите число с: '));
    console.log(` summa = ${b+c},\n difference = ${b-c},\n multiply = ${b*c},\n division = ${b/c},\n remainder from division = ${b%c}`);
} */
