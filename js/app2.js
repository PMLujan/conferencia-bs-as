document.addEventListener('DOMContentLoaded', function(){
});
const botonTicket=document.querySelector('.botonTicket');
console.log(botonTicket);

botonTicket.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href= "http://127.0.0.1:5500/tickets.html"
});