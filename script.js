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
      break;
}

lang === 'ru' ? console.log( arr[0].toString() ) : 
lang === 'ru'? console.log( arr[1].toString() ) : console.log('Нет такого языка');


///////////////////

const namePerson = prompt('Введите имя').toLowerCase();

namePerson === 'артем' ? console.log(namePerson[0].toUpperCase() + namePerson.slice(1)  + ' директор') :
namePerson === 'александр' ? console.log(namePerson[0].toUpperCase() + namePerson.slice(1) + ' преподаватель') : 
console.log(namePerson[0].toUpperCase() + namePerson.slice(1) + ' студент');