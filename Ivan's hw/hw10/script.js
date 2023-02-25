//HW DOM (из ДЗ: Ветвления)

//closure calc

/* {
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            const div = document.createElement('div');
            for (const rate in data.rates) {
                const btn = document.createElement('button');
                btn.onclick = () => {
                    let sum = prompt('Введите сумму!:');
                    alert(`Возьмите ${Math.round(sum*data.rates[rate])}`);
                }
                div.append(btn);
                btn.innerHTML = rate;
                console.log(data.rates[rate]);
            }
            document.body.append(div);
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
} */

//closure calc 2 Знаю, что наговнокодил. Домашек навалилось куча. Сделаю следующие, вернусь сюда. Может потом пойму, как доставать значения из селектов и помещать их в rate... 
    /* { fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
                const div = document.createElement('div');
                document.body.append(div);

                const selectFrom = document.createElement('select');
                selectFrom.id = 'from';
                div.append(selectFrom);
                for (const rate in data.rates) {
                    const option = document.createElement('option');
                    selectFrom.append(option);
                    option.innerHTML = rate;
                }
                from.onchange = () => {
                    rate.innerHTML = from.value;
                }
                const divRate = document.createElement('div');
                divRate.id = 'rate';
                divRate.innerText = 'rate'
                div.append(divRate);

                const selectTo = document.createElement('select');
                selectTo.id = 'to';
                div.append(selectTo);
                for (const rate in data.rates) {
                    const option = document.createElement('option');
                    selectTo.append(option);
                    option.innerHTML = rate;
                } 
                from.onchange = () => {
                    rate.innerHTML = to.value;
                }

                const input = document.createElement('input');
                input.type = 'number';
                input.id = 'amount';
                div.append(input);
                const divResult = document.createElement('div');
                divResult.id = 'result';
                div.append(divResult);
                console.log(data) //изучите структуру, получаемую с сервера в консоли
            })
    } */

    // countries and cities

    /* {
        fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
            const div = document.createElement('div');
            document.body.append(div);
            const select = document.createElement('select');
            select.id = 'countries';

            div.append(select);
            const selectCities = document.createElement('select');
            selectCities.id = 'cities';
            div.append(selectCities);
            countries.onchange = ()=>{
                countries.innerText = '';
                             //незрозуміло, як виконати цей пункт(добавляет в select#cities элементы option с городами из выбранной только что страны.)
            }
            for (const country in data) {
                    const arrCountry = data[country];
                    const option = document.createElement('option');
                    option.innerText = country;
                    countries.append(option);
                    console.log(arrCountry);
                    for (const cities in arrCountry) {
                            const arrCities = arrCountry[cities];
                            const optionCity = document.createElement('option');
                            optionCity.innerText = arrCities;
                            cities.append(optionCity);
                            console.log(arrCities);
                        }
                    }
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
    }
 */
    //HW DOM (из ДЗ: Цикли)

    //DOM: multiply table

    /* {
        const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
        //console.log(str);
    } */
//DOM: highlight cell

/* {
    const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                td.onmouseover = ()=>{
                    td.style.background = `lightblue`;
                }
                td.onmouseout = ()=>{
                    td.style.background = ``;
                }
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
} */

//DOM: Highlight cross
/* {
    const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                td.onmouseover = ()=>{
                    td.style.background = `lightblue`;
                    tr1.style.background = `lightblue`;
                }
                td.onmouseout = ()=>{
                    td.style.background = ``;
                    tr1.style.background = ``;
                }
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
} */

    