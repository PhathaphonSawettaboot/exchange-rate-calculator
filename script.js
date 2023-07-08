const from_currency = document.getElementById('from-currency');
const to_currency = document.getElementById('to-currency');

const from_currency_amount = document.getElementById('from-currency-amount');
const to_currency_amount = document.getElementById('to-currency-amount');

const rateText = document.getElementById('rate');
const swapBtn = document.getElementById('btn');

from_currency.addEventListener('change', calculateMoney);


function calculateMoney(){
    const from = from_currency.value;
    const to = to_currency.value;
    fetch(`https://v6.exchangerate-api.com/v6/d2ab3224f6350ab80d30b7e7/latest/${from}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[to];
        rateText.innerText=`1 = ${from} = ${rate} ${to}`;
    })
}

calculateMoney();
//so, when open the browser, it will automatically store the values of the from/to currencies.