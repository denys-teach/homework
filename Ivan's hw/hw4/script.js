///ДЗ: Массивы

//Confirms
/* 
{
    let arr = [confirm("Тобе приваблюють українські дівки?"),confirm('Подобається js?'), confirm('Підеш завтра в зал?')];
    console.log(arr);
} */

//Prompts

/* {
    let arr = ['learn js'];
    for(let i = 1; i<3; i++){
        arr[i] = prompt(`${i} пункт того, що я хочу в цьому житті.`);
    }
    console.log(arr);
} */

//Item access

/* {
    let arr = [4,7,2,9,12];
    function getValueArr(index){
        console.log(arr[index]);
    }
    getValueArr(prompt('Index'));
} */

//Item change

/* {
    let arr = [4,7,2,9,12];
    function putItamValueArr(index,value){
        arr[index] = value;
        console.log(arr);
    }
    putItamValueArr(prompt('Index'),prompt('value'));
} */

//Multiply table

/* {
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    console.log(arr[5][2]);
} */

//Multiply table slice

/* {
    let arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    arr = arr.slice(-5);
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        newArr[i] = arr[i].slice(-5);
    }
    console.log(newArr);
} */

//IndexOf Word

/* {
    let str = prompt('Введіть речення, використовуючи слово чай:').split(' ');
    let searchTea = str.indexOf('чай');
    if(searchTea===-1){
        console.log('В цьому речені такого слова не існує');
    }
    else{
        console.log(searchTea);
    }
} */

//Reverse

/* {
    let arr = [];
    let newArr = [];
    let a;
    for(let i = 0; i<5; i++){
        arr.push(prompt(''));
    }
    console.log(arr);
    for(let i = 0;i<5;i++){
        a = arr.pop();
        newArr.push(a); 
    }
    console.log(newArr);
} */

//Reverse 2

/* {
    let arr = [];
    let newArr = [];
    let firstArr = [];
    for(let i = 0; i<5; i++){
        arr.push(prompt(''));
    }
    console.log(arr);
    for(let i = 0;i<5;i++){
        let a = arr.pop();
        newArr.push(a); 
    }
    console.log(newArr);
    for(let i = 0; i<5; i++){
        let a = newArr.shift();
        firstArr.unshift(a);
    }
    console.log(firstArr);
} */

//Copy

/* {
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    const arr2 = [...arr];
    console.log(arr);
    console.log(arr2);
} */

//Deep Copy

/* {
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    const deep = JSON.parse(JSON.stringify(arr));
    console.log(deep);
} */

//Array Equals

/* {
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    const arr2 = arr;
    console.log((arr === arr2));
} */

//Flat

/* {
    const arr = [[1,2,3,4,5,],[2,4,6,8,10,],[3,6,9,12,15,],[4,8,12,16,20,],[5,10,15,20,25,],];
    let arr2 = [...arr[0],...arr[1],...arr[2],...arr[3],...arr[4]];
    console.log(arr2);
} */

//Destruct

/* {
    let str = prompt('Введіть рядок:');
    let str2 = str.split(' ').join('');
    [one,two,three,four,five,six,seven,eight,nine,ten] = str2;
    console.log(one,five,nine);
} */

//Destruct default

/* {
    let str = prompt('Введіть рядок:');
    let str2 = str.split(' ').join('');
    [one,two='b',three,four='d',five='e',six,seven,eight,nine,ten] = str2;
    console.log(two,four,five);
} */

//Multiply table rest

/* {
    let arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    [[],[zero,...firstArr],[zero,...secondArr],[zero,...thirdArr],[zero,...fourthArr],[zero,...fifthArr]] = arr;
    let arr2 = [...firstArr,...secondArr,...thirdArr,...fourthArr,...fifthArr];
    
    console.log(arr2);
} */

//For Alert

/* {
    let arr = ["John", "Paul", "George", "Ringo"]
    for (const iterator of arr) {
        alert(iterator);
    }
} */

//For Select Option

/* {
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (let currency of currencies){
        str+=`<option>${currency}<option/>`
    }
    str+= "</select>"
    document.write(str) //document.write отобразит ваш HTML на странице
} */

//For Table Horizontal

/* {
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (let currency of names){
        str+= `<td>${currency}</td>`
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
} */

//For Table Vertical

/* {
    const names = ["John", "Paul", "George", "Ringo"]
    let str = '<table>'
    for (const iterator of names) {
        str+= `<tr><td>${iterator}</td></tr>`
    }
    str+= '</table>'
    document.write(str);
} */

//For Table Letters

/* {
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table border='1'>"
    for (let currency of currencies){ //цикл создает строки
        //одна итерация цикла создает ОДНУ СТРОКУ
        str+=`<tr>`
        for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
            //одна итерация цикла создает ОДНУ ЯЧЕЙКУ
            str+= `<td>${letter}</td>`
        }
        str+='</tr>'
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
} */

//For Multiply Table

/* {
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    let str = `<table border ='1'>`
    for(let i = 0; i<arr.length;i++){
        if(i%2==0){
            str+= `<tr style=
            onmouseover="this.style.backgroundColor='#555';"
            onmouseout="this.style.backgroundColor='#333';">`
            for(let j = 0; j<arr[i].length;j++){
                str += `<td>${arr[i][j]}</td>`
            }
        }
        else{
            str+= `<tr style=
            onmouseover="this.style.backgroundColor='#555';"
            onmouseout="this.style.backgroundColor='#999';">`
            for(let j = 0; j<arr[i].length;j++){
                str += `<td>${arr[i][j]}</td>`
            }
        }
        str+= '</tr>'
    }
    document.write(str);
} */

//Function Capitalize

/* {
    const capitalize = str => {
        let result
        let firstLetter = str[0].toUpperCase();
        result = firstLetter + str.slice(1).toLowerCase();
        return result //именно этот код обеспечит возврат результата функции
    }
    console.log(capitalize("cANBerRa")) //Canberra
} */

//Map Capitalize

/* {
    const capitalize = str => {
        let result
        let firstLetter = str[0].toUpperCase();
        result = firstLetter + str.slice(1).toLowerCase();
        return result //именно этот код обеспечит возврат результата функции
    }
    let str = prompt('Введіть будь-яке речення:');
    str = str.split(' ').map(capitalize).join(' ');
    console.log(str);
} */

//Filter Lexics

/* {
    let str = prompt('Введіть речення: ').split(' ');
    let checkStr = str.filter((x) => {return (x==='блин')})
    console.log(checkStr);
} */

//Beep Lexics

/* {
    let str = prompt('Введіть рядок: ').split(' ');
    let badWords = ['блин', 'капец', 'черт'];
    console.log(str.map(x => {str.includes(badWords)? x: 'BEEP'}));
} */

//Reduce Html

/* {
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str          = "<select>"
    str             += currencies.reduce( (a,b) => a+ `<option>${b}</option>`, "")
    str             += "</select>"
    document.write(str);
} */

//For Brackets Hell Check (не встиг виконати) 

/* {
    const line = prompt()
    const bracketsStack = []
    let   i             = 0
    for (let character of line){
        //не обращайте внимания на символы, кроме трех видов скобок 
        if (ПРОБЛЕМА){
            break; //оператор break прерывает цикл преждевременно
}
        i++
    }
} */