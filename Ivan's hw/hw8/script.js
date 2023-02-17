// ДЗ: Циклы

//blocks
/* {
    let a = 10
{
    let b = 20
    {
        let c = 30
        //какие тут будут значения переменных a,b,c,d // a = 10, b = 20, c = 30, d - не оголошення(буде помилка при викликі)
        
        b++ 
        a *= 10
    }
    {
        let c = 50
        //какие тут будут значения переменных a,b,c,d a = 100, b = 21, c = 50, d = не оголошена 
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //какие тут будут значения переменных a,b,c,d a = 100500, b = 520, c = 50, d = 'value'
        {
            let a = -50
            b     = 1000
            //какие тут будут значения переменных a,b,c,d a = -50, b = 20, c = 50, d = "value"
        }
        //какие тут будут значения переменных a,b,c,d // a = 50, b = 20, c = не оголошена, d = "value"
    }
    //какие тут будут значения переменных a,b,c,d a = 10, b = 20, c,d - не оголошені
}
//какие тут будут значения переменных a,b,c,d a = 10, b,c,d - не оголошені
} */

//comparison if

/* {
    var age = +prompt("Сколько вам лет?","");
    if (age < 18 && age >0){
        alert("школьник");
    }
    else {if (age > 18 && age < 30){
        alert("молодеж");
    }
    else {if (age > 30 && age < 45){
        alert("зрелость");
    }
    else {if (age > 45 && age < 60){
        alert("закат");
    }
    else {if (age > 60){
        alert("как пенсия?");
    }
    else {if(age<0){
        alert('Іди назад в своє майбутнє');
    }
    else {
        alert("то ли киборг, то ли KERNESS"); 
    }
}}}}}} */

//switch: sizes

/* {
    let key = +prompt('Введіть ваш розмір("42,44,46,48,50,52,54,56,58"), а ми переведомо в американську систему:')
    switch (key) {
        case 42:
            alert("Ваш розмір XXS")
            break;
        case 44:
            alert("Ваш розмір XS")
            break;
        case 46:
            alert("Ваш розмір S")
            break;
        case 48:
            alert("Ваш розмір M")
            break;
        case 50:
            alert("Ваш розмір L")
            break;
        case 52:
            alert("Ваш розмір XL")
            break;
        case 54:
            alert("Ваш розмір XXL")
            break;
        case 56:
            alert("Ваш розмір 2XL")
            break;
        case 58:
            alert("Ваш розмір 3XL")
            break;
        default:
            alert('Ви невірно ввели розмір')
            break;
    }
} */

//switch: if

/* {
    let color = prompt("Введите цвет","");
    if(color==='red'){
        document.write("<div style='background-color: red;'>красный</div>");
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color === 'black'){
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color === 'blue'){
        document.write("<div style='background-color: blue;'>синий</div>");
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else if(color === 'green'){
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else{
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
} */

//noswitch

{
    const noSwitch = (key, cases, defaultKey='default') => {
        if(key == cases[key]){  //проверка наличия key в cases
            //если есть - достать значение по ключу. это будет функция. Запустить ее
        //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. Запустить 
        //пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта
        }
    }
    const drink = prompt("Что вы любите пить")
    noSwitch(drink, {
        воду: () =>  console.log('Самый здоровый выбор!'),
        чай(){ 
            console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
        },
        "пиво": () => console.log('Хорошо летом, да в меру'),
        виски: function(){
            console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
        },
        default(){
            console.log('шото я не понял')
        }
    })
}

//