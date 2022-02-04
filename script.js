'use strict';

const date = new Date();

const week = [
   'Воскресенье',
   'Понедельник',
   'Вторник',
   'Среда',
   'Четверг',
   'Пятница',
   'Суббота'
];

week.forEach(function(item, index) {
   if (index === date.getDay()) {
      document.body.innerHTML += `<b>${item}</b><br>`;
      return;
   }
   if (index === 0 || index === 6) {
      document.body.innerHTML += `<i>${item}</i><br>`;
      return;
   }

   document.body.innerHTML += `${item}<br>`;
});