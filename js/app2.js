document.addEventListener('DOMContentLoaded', function(){
});
const botonTicket=document.querySelector('.botonTicket');
      botonTicket.addEventListener('click', function(e){
                  e.preventDefault();
                  window.open('../tickets.html');
      })
