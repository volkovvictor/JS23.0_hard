const isNumber = function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
}

let num = prompt('Введите число');

while(!isNumber(num) || num === null) {
   num = prompt('Введите число');
}

num = num.trim();

console.log(num);