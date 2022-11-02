window.onscroll= function(){
    if(document.documentElement.scrollTop > 100){
     document.querySelector('.btnUp-contenedor').classList.add('show');
    }else{
     document.querySelector('.btnUp-contenedor').classList.remove('show');
    }
};

document.querySelector('.btnUp-contenedor').addEventListener('click',function(){
 window.scrollTo({
     top:0,
     behavior:'smooth'
 })
})