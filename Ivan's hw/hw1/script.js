//ДЗ: Типы данных, числа и пустые типы

// assign: evaluation

/* {
    var a = 5;//оголошення змінної а 
    var b, c; //оголошення змінної b,c 

    b = ((a) * 5); //спочатку підставляється змінна а, потім виконується оператор *, та після цього відбувається присвоєння змінній b 
    b = (c = (b/2)); //спочатку підставляється змінна b, потім виконується оператор /, після цього відбувається присвоєння змінній c, результат заноситься до b
} */

//Number: age

/* {
    let age = prompt('Скільки тобі років?: ');
    let yearOfBirth;
    let checkYear = confirm('В цьому році у тебе вже було день народжуння?(ОК-було, ОТМЕНА-не було)');
    console.log(checkYear);
        if(checkYear){
            yearOfBirth = 2023 - age; 
        }
        else{
            yearOfBirth = 2023 - age - 1;
        }
    alert(`Ви народились в ${yearOfBirth} році!`);
} */

//Number: temperature

/* {
    let temperature = +prompt('What temperature do you see in thermometer?: ');
    alert('You enter temperature: '+ temperature + 'degree(s)')
    let translateTemperature = temperature*(9/5)+32;
    console.log(translateTemperature+'F');
    let temperature1 = +prompt('What temperature do you see in thermometer(F)?: ');
    let translateTemperature1 = (temperature-32)*(5/9);
    console.log(translateTemperature1+'C');
} */

// divide

/* {
    let a = +prompt("Введіть число а:");
    let b = +prompt(`Введіть число b:`);
    let c = Math.round(a)/Math.round(b);
    alert(`Результат ділення: ${c}.\nЧисла округлені до цілої частини!`)
} */

// Number: currency

/* {
    const rate = 42;
    let grn = prompt('Введите вашу сумму для обмена(грн): ');
    let exchange = grn / rate;
    alert('Take your money: ' + exchange.toFixed(2) + '$');
} */

// Number: RGB
/* {
    let rgb = [];
    let r_Rgb, g_Rgb, b_Rgb;
    rgb.push(r_Rgb = prompt('Enter red color(0-255): '));
    rgb.push(g_Rgb = prompt('Enter green color(0-255): '));
    rgb.push(b_Rgb = prompt('Enter blue color(0-255): '));
    alert('Color in CSS(RGB): #' + rgb.join(''));
} */

//Number: flats

/* {
    let enterFlat = +prompt(`Введіть номер квартири:`);
    let floors = +prompt(`Введіть кількість поверхів в будинку:`);
    let apartments = +prompt(`Введіть кількість квартир на поверху:`);
    console.log(`Ви ввели квартиру №${enterFlat}\nповерх: ${Math.ceil(enterFlat/apartments)}\nПід'їзд:${Math.ceil(enterFlat/(floors*apartments))}`);
} */