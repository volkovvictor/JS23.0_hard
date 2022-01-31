'use strict';

const lang = prompt("Выберите язык"),
      arr = [
         ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
         ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']
      ];

if(lang === 'ru') {
   console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}
if(lang === 'en') {
   console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

switch(lang) {
   case 'ru' :
      console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
      break;
   case 'en' :
      console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

lang === 'ru' ? console.log( arr[0].toString() ) : console.log( arr[1].toString() );


///////////////////