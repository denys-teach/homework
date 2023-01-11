//Odnosum Denys, Group: JS9_Online

// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.

/* {
    for(let i = 0; i < 10; i++){
        if(i%2==0){
            if(i%3==0){
                console.log(`i = ${i}: FizBuz`);
            }
            else{
            console.log(`i = ${i}: Fiz`);
            }
        }
        else if(i%2!==0){
            if(i%3==0){
                console.log(`i = ${i}: FizBuz`);
            }
            else{
            console.log(`i = ${i}: Buz`);
            }
        }
        
    }
} */

// 2) Написати логіку знаходження факторіалу числа 10.

/* {
    function factorial(number){
        let fact = 1;
        for(let i = 1; i<=number; i++){
            fact = fact * i;
        }
        console.log(fact);
    }
    factorial(10);
} */

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?

/* {
    let consumptionPaperDuringTheWeek = 1200;
    let oneReamOfPaper = 500;
    let weeks = 8;
    let needPaper = Math.ceil(((consumptionPaperDuringTheWeek*weeks))/oneReamOfPaper);
    console.log(`${needPaper} упаковок бумаги нужно на 8 недель.`);
} */

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

/* {
    function findFloor(a){
        let n=3, f=9, e;
        let n1, n2, n3, n4;
        // f - этажность дома
        // e - квартир в подъезде // количество подъездов в доме
        // n - квартир на этаже
        // a - номер квартиры
        e=f*n;//сколько квартир в подъезде
        
        n4=a%e;
        n2=(a-n4)/e;
        n1=n4==0?n2:n2+1;//в каком подъезде эта квартира
        
        n3=(((a-1-((a-1)%n))/n)%f)+1;//на каком этаже эта квартира
        console.log(`подъезд: ${n1}, этаж: ${n3}`);
    }
    findFloor(99);
} */

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків


{
    function piramid(numberOfRows){
        for(let i = numberOfRows-1, j =1; i>=0&&j<=(numberOfRows); i--,j++){
            console.log(i,(j+(j-1)));
        }
    }
    piramid(4);
}