'use strict';
{
  const go =document.getElementById('go')
  const grayback =document.getElementById('grayback')
  const modal =document.getElementById('modal')
  const close =document.getElementById('close')

  console.log(go)
  go.addEventListener('click', () => {
    modal.classList.remove('hidden')
    grayback.classList.remove('hidden')
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden')
    grayback.classList.add('hidden')
    
  });
}