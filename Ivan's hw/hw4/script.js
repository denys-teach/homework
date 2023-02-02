//ДЗ: Массивы

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

{
    
}