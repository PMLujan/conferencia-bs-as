document.addEventListener('DOMContentLoaded', function(){
});

const datos={
    cantidad:"",
    select:"",
    nombre:"",
    apellido:"",
    correo:"",
}

const nombre=document.querySelector('#nombre');
const apellido=document.querySelector('#apellido');
const correo=document.querySelector('#correo');
const select= document.querySelector('#select');
const formulario=document.querySelector('.formulario-ticket')
const resumen=document.querySelector('#resumen');
const borrar=document.querySelector('#borrar');
const cantidad=document.querySelector('#cantidad');
const botonesFormulario=document.querySelector('.tickets-btn');


nombre.addEventListener('input',function(e){
    datos[e.target.id]= e.target.value;
    console.log(datos);
});
apellido.addEventListener('input',function(e){
    datos[e.target.id]= e.target.value;
    console.log(datos);
});
correo.addEventListener('input',function(e){
    datos[e.target.id]= e.target.value;
    console.log(datos);
});

cantidad.addEventListener('input',function(e){
    datos[e.target.id]= e.target.value;
});


select.addEventListener('input',function(e){
   datos[e.target.id]=e.target.value;
});

resumen.addEventListener('click',function(e){
       e.preventDefault();
           let cantidadDeEntradas= datos.cantidad;
           let tipoDeCliente=datos.select;
           let valor=200;
                if(tipoDeCliente  == "Estudiantes"){
                    valor= valor -(valor * 80 /100);
                    mostrarValor(Math.floor(valor * parseFloat(cantidadDeEntradas)))
                }else if(tipoDeCliente =='Trainee' ){
                    valor= valor - (valor * 50 / 100);
                    mostrarValor(Math.floor(valor * parseFloat(cantidadDeEntradas)))
                }else if(tipoDeCliente =='Junior'){
                    valor= valor - (valor * 15 /100) ;
                    mostrarValor(Math.floor(valor * parseFloat(cantidadDeEntradas)))
                }else{
                    mostrarMensaje('Todos los campos son obligatorios');
                }        
});

borrar.addEventListener('click',function(e){
    e.preventDefault();
    formulario.reset();
})

function mostrarValor(valor){
    const mensaje=document.createElement('P');
          mensaje.textContent= `Total a pagar: $ ${valor}`;
          mensaje.classList.add('mostrarValor');
    const botonEnviar=document.createElement('INPUT');
          botonEnviar.setAttribute("type","submit");
          botonEnviar.value= "comprar";
          botonEnviar.setAttribute("id","btn-compra");
          botonEnviar.addEventListener('click', function(e){
                             e.preventDefault();
                             datos[e.target.id]=e.target.value;
                             const {nombre,apellido,correo} = datos;
                             if(nombre == "" || apellido == "" || correo ==""){
                                 mostrarMensaje('Todos los campos son obligatorio');
                             }else{
                                 compraExitosa('Te enviamos un correo para continuar con tu compra')
                             }
                         });
    const botonCerrar=document.createElement('INPUT');
          botonCerrar.setAttribute("type", "submit");
          botonCerrar.value="Cancelar"
          botonCerrar.classList.add('btn-cerrar');
          botonCerrar.addEventListener('click', function(e){
                       e.preventDefault();
                       formulario.reset();
                       contenedorCompra.remove()
       });       
          
    const contenedorCompra=document.createElement('div');  
          contenedorCompra.appendChild(mensaje);
          contenedorCompra.appendChild(botonEnviar);
          contenedorCompra.appendChild(botonCerrar);     
          contenedorCompra.classList.add('contenedorCompra');   
    botonesFormulario.remove();
    resumen.remove();
    formulario.appendChild(contenedorCompra);
};

function mostrarMensaje(mensaje){
    const error =document.createElement('P');
          error.textContent= mensaje;
          error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
};

function compraExitosa(mensaje){
    const contenedorCompra=document.querySelector('.contenedorCompra')
    const contenedorCompraExitosa=document.createElement('div');  
          contenedorCompraExitosa.textContent=mensaje;
          contenedorCompraExitosa.classList.add('felicitaciones');
          contenedorCompra.remove();
     formulario.appendChild(contenedorCompraExitosa)

     setTimeout(() => {
        contenedorCompraExitosa.remove();
        formulario.reset();
        formulario.appendChild(borrar);
        formulario.appendChild(resumen);
     }, 3000);
}