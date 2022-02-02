'use strict';

const arr = ['276', '543', '448', '8721', '4534', '381', '2243'];

for(let i = 0; i < arr.length; i++) {
   if(arr[i][0] === '2' || arr[i][0] === '4') {
      console.log(arr[i]);
   }
}

///////////////////////////////

const printPrimeNumber = function(n) {
   for(let i = 2; i <= Math.floor(n / 2); i++) {
      if(n % i === 0) return;
   }

   console.log(`${n}: Делители этого числа: 1 и ${n}`);
}

for (let i = 2; i <= 100; i++) {
   printPrimeNumber(i);
}