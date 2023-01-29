//ДЗ: Строки

//String: greeting
/* {
    let name = prompt('What is your name?');
    alert("Hello, " + name + "!" ); 
} */

//String: gopni4ek
/* {
    let str = prompt('Введіть будь-який рядок: ');
    console.log(str.split(',').join(',блін'));
} */

//String: capitalize

/* {
    let str = "cANBerRa"
    let result = str.toLowerCase().slice(1);
    str = str[0].toUpperCase();
    result = str + result; 
    console.log(result) //Canberra
} */

//String: word count

/* {
    alert('dsfghdf dsfg df gdf f fd df fd f d'.split(' ').length);
} */

//String: credentials

/* {
    let firstName = prompt("Write your first name:").trim();
    let secondName = prompt('Write your second name!:').trim();
    let lastName = prompt('Write your last name!:').trim();
    let fullNameInProcess = [firstName, secondName, lastName];
    let fullName=[];
    let i = 0;
    while(i<=((fullNameInProcess.length)-1)){
        result = fullNameInProcess[i].toLowerCase().slice(1);
        fullNameInProcess[i] = fullNameInProcess[i][0].toUpperCase();
        result = fullNameInProcess[i] + result;
        fullName.push(result);
        i++;    
    }
    console.log((fullName.join(" ")));
} */

//String: beer

/* {
    let str = "Было жарко. Василий пил пиво вприкуску с креветками"
    let result = str.split('пиво').join('чай');
    console.log(result) //"Было жарко. Василий пил чай вприкуску с креветками"
} */

//String: no tag

/* {
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
    let result = str.slice(0,str.indexOf('<'+1)) + str.slice(str.indexOf('>'));
    console.log(result) //какой-то текст в котором есть один тэг  и всякое другое
} */

// String: big tag

/* {
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
    let result0 = str.slice(str.indexOf('<'),str.indexOf('>')).toUpperCase();
    let result = str.slice(0,str.indexOf('<')) + result0 + str.slice(str.indexOf('>'));
    console.log(result) //какой-то текст в котором есть один тэг <BR /> и всякое другое
} */

//String: new line

/* {
    let str = prompt('fsdgfg\nsfdgfdg');
    let str2 = '';
    str2 = str.split('\n').join('\n');
    console.log(str2);
} */

// String: youtube

{

}

