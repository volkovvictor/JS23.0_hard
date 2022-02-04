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
   const weekend = index === 0 || index === 6,
         today = index === date.getDay();

   if (today && weekend) {
      document.body.innerHTML += `<b><i>${item}</i></b><br>`;
      return;
   }
   if (today) {
      document.body.innerHTML += `<b>${item}</b><br>`;
      return;
   }

   if (weekend) {
      document.body.innerHTML += `<i>${item}</i><br>`;
      return;
   }

   document.body.innerHTML += `${item}<br>`;
});