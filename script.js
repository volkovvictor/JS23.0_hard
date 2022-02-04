const isNumber = function(num) {
   return !isNaN(parseInt(num.trim())) && isFinite(num.trim());
}

let num = prompt('Введите число');

while(num === null || !isNumber(num)) {
   num = prompt('Введите число');
}

console.log(num);