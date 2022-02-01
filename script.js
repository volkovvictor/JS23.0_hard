const getString = function(str) {
   if ( typeof str !== 'string') {
      return 'Не строка';
   } 

   str = str.trim();

   if(str.length > 30) {
      str = str.slice(0, 30) + '...';
   }

   return str;
};

console.log(getString('   В этой строке больше 30 символов   '));