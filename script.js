const dollarContainer =document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');
const usdAmount2 = document.getElementById('usd-amount2');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json())
.then(data => displayData(data));

const displayData = data =>{
    const usd = data.bpi.USD.rate_float;
    usdAmount.textContent =  `$${usd} USD`;
    const totalDollarItems = Math.trunc(usd / 1000);
   
}

