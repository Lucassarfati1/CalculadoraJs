window.addEventListener('load',()=>{// Escuchamos cuando se carga el documento


    //creamos dos constantes y guardamos los elementos que necesitamos (el display y los botones)
    const display = document.querySelector('.calculatorDisplay');
    const keypadButtons = document.getElementsByClassName('keyPadButton');

    // creamos una constante para convertir el HTMLcollection en un array
    const keypadButtonsArray = Array.from(keypadButtons);

    //iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((buton)=>{

        //A cada boton le agregamos un listener

        buton.addEventListener('click',()=>{
            calculadora(buton,display);
        })
    }) 

})

function calculadora(button,display){
    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display,button);
            break;
    }
}
function calcular(display){
    display.innerHTML=eval(display.innerHTML) //tomar el string y resolver
}

function actualizar(display,button){
    if(display.innerHTML== '0'){
        display.innerHTML='';

    }
    display.innerHTML+=button.innerHTML;
}
function borrar(display){
    display.innerHTML=0;
}