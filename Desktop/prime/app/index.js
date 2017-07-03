'use strict';

let getPrimes = (n) => {
  //to write a program that takes in a certin number 'n', and prints in an array all prime numbers between 0 to that 'n'.
	let numbers = [], primeN=[];
	let Sroot = Math.sqrt(n);

//sieving out perfect squares asb they are composite(opposite of prime numbers)
	for(let i = 2; i<Sroot; i++){
		if(!numbers[i]){
for (let j = i*i; j<=n ; j+=i ){
	numbers[j] = 'composite';
         }
		}
	}
 //running a for loop to select what is left and push into the array if its ot a composite then by the function below,its a prime number
	for(let i = 2; i<=n; i++){
		if(!numbers[i]){
			primeN.push(i);
		}
	}
	return primeN;
}

module.exports = getPrimes
