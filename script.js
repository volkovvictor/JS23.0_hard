'use strict';

const currentDate = function() {
   document.body.innerHTML = '';
   
   const date = new Date(),
   year = date.getFullYear(),
   month = date.getMonth(),
   day = date.getDate(),
   dayOfWeek = date.getDay(),
   hours = date.getHours(),
   minutes = date.getMinutes(),
   seconds = date.getSeconds();

   const months = [
   'января',
   'февраля',
   'марта',
   'апреля',
   'мая',
   'июня',
   'июля',
   'августа',
   'сентября',
   'октября',
   'ноября',
   'декабря'
   ];

   const week = [
   'воскресенье',
   'понедельник',
   'вторник',
   'среда',
   'четверг',
   'пятница',
   'суббота'
   ];

   const caseWord = function(time) {
      if(time % 10 >= 2 && time % 10 < 5 && (time < 12 || time > 15)) {
         return ['часа', 'минуты', 'секунды'];
      }
      if(time % 10 === 1 && time !== 11) {
         return ['час', 'минута', 'секунда'];
      }

         return ['часов', 'минут', 'секунд'];
   };

   const formatNumber = function(num) {
      if(num >= 1 && num < 10) {
         return '0' + num;
      }

      return num;
   };

   const createEl = function() {
      const div = document.createElement('div');

      div.innerHTML = `
      <p>Сегодня ${week[dayOfWeek]}, 
      ${day} ${months[month]} ${year} года, 
      ${hours} ${caseWord(hours)[0]} 
      ${minutes} ${caseWord(minutes)[1]} 
      ${seconds} ${caseWord(seconds)[2]}</p>

      <p>${formatNumber(day)}.${formatNumber(month + 1)}.${year} - 
      ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}</p>
      `;

      return div;
   };

   document.body.append(createEl());
};

const timer = setInterval(currentDate, 1000);

currentDate();