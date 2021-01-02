const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endPoint}?base=${base}`);
    const rates = await res.json();
    return rates;
}

export async function convert(amount, from, to) {
        // first check if we even have the rates to convert from that currency
    if(!ratesByBase[from]) {
        console.log(`we dont have ${from} to convert to ${to}. Lets go get it`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        ratesByBase[from] = rates;
    }
    // convert that amount that they passed in
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}
