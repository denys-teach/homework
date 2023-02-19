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
                cities.append(optionCity);             //незрозуміло, як виконати цей пункт(добавляет в select#cities элементы option с городами из выбранной только что страны.)
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
                            console.log(arrCities);
                        }
                    }
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
    } */

    //HW DOM (из ДЗ: Цикли)

    //DOM: multiply table

    {
        const div = document.createElement('div');
        document.body.append(div);
        div.id = 'container';
        for(let i = 0; i<10;i++){
            const divBlock = document.createElement('div');
            div.append(divBlock);
            divBlock.id = 'block';
            block.style.border = 'solid 1px red';
            block.style.height = '100px';
            block.style.width = '100px';
            block.style.display = 'inline-block';
        }
        /* for(let i = 0; i<10;i++){
            const div2 = document.createElement('div');
            div.append(div2);
            div.innerText = `${i}`;
            div.style.border = 'solid 1px red';
            div.style.width = '20px';
            div.style.height = '18px';
            div.style.textAlign = 'center';
        } */
    }