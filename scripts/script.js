'use strict';

const square = document.querySelector('.square-body');
const blocks = square.querySelectorAll('.block');
const btnReset = document.querySelector('.btn-reset');

square.addEventListener('click', (e) => {
   const thisBlock = e.target.closest('.block');
   if(e.target.closest('.right')) {
      const nextBlock = thisBlock.nextElementSibling;

      if(!nextBlock) return;
      thisBlock.before(nextBlock);
   }
   if(e.target.closest('.left')) {
      const prevBlock = thisBlock.previousElementSibling;

      if(!prevBlock) return;
      prevBlock.before(thisBlock);
   }
   if(e.target.closest('.bottom')) {
      const prevBlock = thisBlock.previousElementSibling;
      let bottomBlock = thisBlock;

      for(let i = 0; i < 5; i++) {
         if(!bottomBlock) return;
         bottomBlock = bottomBlock.nextElementSibling;
      }

      bottomBlock.after(thisBlock);
      prevBlock.after(bottomBlock);
   }

   if(e.target.closest('.top')) {
      const nextBlock = thisBlock.nextElementSibling;
      let topBlock = thisBlock;

      for(let i = 0; i < 5; i++) {
         if(!topBlock) return;
         topBlock = topBlock.previousElementSibling;
      }

      topBlock.before(thisBlock);
      nextBlock.before(topBlock);
   }
});
btnReset.addEventListener('click', () => {
   blocks.forEach((block, index) => {
      if(index === 0) {
         block.after(blocks[index+1]);
         return;
      }

      if(index === blocks.length - 1) {
         block.before(blocks[index-1]);
         return;
      }

      block.after(blocks[index + 1]);
   });
});