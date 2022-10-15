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
borrar.addEventListener('click',function(e){
    e.preventDefault();
    formulario.reset();
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
                    mostrarMensaje("Todos los campos son obligatotios")
                }
});

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
                             let validarCompra= Object.keys(datos)
                               for(let i=0; i< validarCompra.length ; i++){
                                let compra = validarCompra[i];
                                if(datos[compra] === ""){
                                  contenedorCompra.remove();
                                  mostrarMensaje(`Complete ${compra}`);
                                }
                                compraExitosa('');
                            }
                         });
    const botonCerrar=document.createElement('INPUT');
          botonCerrar.setAttribute("type", "submit");
          botonCerrar.value="Cancelar"
          botonCerrar.classList.add('btn-cerrar');
          botonCerrar.addEventListener('click', function(e){
                       e.preventDefault();
                       formulario.reset();
                       contenedorCompra.remove();
       });       
          
    const contenedorCompra=document.createElement('div');  
          contenedorCompra.appendChild(mensaje);
          contenedorCompra.appendChild(botonEnviar);
          contenedorCompra.appendChild(botonCerrar);     
          contenedorCompra.classList.add('contenedorCompra'); 
    formulario.appendChild(contenedorCompra);

    setTimeout(() => {
        contenedorCompra.remove()
    }, 6000);
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
                contenedorCompra.remove();
}
