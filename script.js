const from_currency = document.getElementById('from-currency');
const to_currency = document.getElementById('to-currency');

const from_currency_amount = document.getElementById('from-currency-amount');
const to_currency_amount = document.getElementById('to-currency-amount');

const rateText = document.getElementById('rate');
const swapBtn = document.getElementById('btn');

from_currency.addEventListener('change', calculateMoney);
to_currency.addEventListener('change', calculateMoney);
from_currency_amount.addEventListener('input', calculateMoney);
to_currency_amount.addEventListener('input', calculateMoney);


function calculateMoney(){
    const from = from_currency.value;
    const to = to_currency.value;
    fetch(`https://v6.exchangerate-api.com/v6/d2ab3224f6350ab80d30b7e7/latest/${from}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[to];
        rateText.innerText=`1 ${from} = ${rate} ${to}`;
        to_currency_amount.value=(from_currency_amount.value*rate);
    })
}

swapBtn.addEventListener('click',()=>{
    //Created a variable to store the previous currency because if we don't do it, once we switch to another currency and want to go back to the previous one, it won't be possible. This is because the code will remember the original variable, which is the same.
    const temp = from_currency.value;
    from_currency.value = to_currency.value;
    to_currency.value = temp;
    calculateMoney();
})

calculateMoney();
//so, when open the browser, it will automatically store the values of the from/to currencies.