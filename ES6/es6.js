//---Exercise 1: Given an age, tell if the person can vote or not-------------//
"use strict"
const canVote = function(age) {
    if (age >=  18) {
        return 'Yes, you can start voting'
    }else{
        return 'No, you can start voting'
    }
}
console.log(canVote(20))

//---Exercise 2: Given a number, return the sum of all prime number-------------//
const isPrime = function(number){
    for(let i = 2; i < number; i++){ // or < n
        if(number % i === 0) return false
    }
    return number > 1;
}

const sumOfPrime = function(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        if(isPrime(i)) sum += i;
    }
    return sum;
}
console.log(sumOfPrime(10))

//---Exercise 3: Given a number, find all numbers that is perfect-------------//
const isPerfect = function (n) {
    let sumOfFactors = 0;
    for (let index = 1; index  <= n; index ++) {
        if (n % index  === 0) {
            sumOfFactors += index;
        }
    }
    return sumOfFactors === n * 2;
}

for (let i = 1; i <= 10; i++) {
    console.log('is ' + i + ' Perfect?: ' + isPerfect(i));
}
//---Exercise 4: Working with function args-------------//
const amountAfterTaxes = function(amount, ...taxes) {
    const computeTaxForAmount = function(tax){
        return amount * tax / 100.0;
    }
    const totalValues = function(total, values){
        return values + total;
    }
    return taxes.map(computeTaxForAmount)
        .reduce(totalValues, amount)
        .toFixed(2)
}

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount))
console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax));


