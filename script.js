let num = 266219,
mult = 1;

//////////////////

num = String(num).split('');

for (let i = 0; i < num.length; i++) {
   mult *= num[i];
}
