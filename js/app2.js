document.addEventListener('DOMContentLoaded', function(){
});
const botonTicket=document.querySelector('.botonTicket');
console.log(botonTicket);

botonTicket.addEventListener('click',function(e){
    e.preventDefault();
    window.location = "../tickets.html"
});