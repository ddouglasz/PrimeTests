'use strict';

let primeNumbers = (n) => {
  //to write a program that takes in a certin number 'n', and prints in an array all prime numbers between 0 to that 'n'.
	let numbers = [], primeN=[];
	let Sroot = Math.sqrt(n);

//
	for(let i = 2; i<Sroot; i++){
		if(!numbers[i]){
for (let j = i*i; j<=n ; j+=i ){
	numbers[j] = 'composite';
         }
		}
	}
 
	for(let i = 2; i<=n; i++){
		if(!numbers[i]){
			primeN.push(i);
		}
	}
	return primeN;
}

module.exports = primeNumbers
