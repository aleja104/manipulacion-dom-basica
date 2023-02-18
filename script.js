// h1{ color: red }
// .parrafito{ ... }
// #pid { ... }


//SELECTORES
const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const resultado = document.getElementById('result');

h1.querySelector.onmouseover = function () { mouseOver() };
h1.querySelector.mouseOver = function () { mouseOut() };

h1.addEventListener('mouseover', mouseOver);
h1.addEventListener('mouseout', mouseOut);


function mouseOver(){
    
   h1.style.color = 'pink';
}


function mouseOut() {
    h1.style.color = "black";
}

//agrega el evento al btn, sin tener que llamar la funcion desde la configuracion HTML del boton. El metodo event Listener le pone los parentesis al nombre de la funcion. Por eso no es necesario ponerlos.
//btn.addEventListener('click', btnOnclick);

// Al tener un formulario, el evento se le agrega al formulario de la siguiente manera:
//form.addEventListener('submit', sumarInputValues);

//EVENTO DE UN BOTON
/*function sumarInputValues(event){

    //console.log(event);
    event.preventDefault(); //Se usa este metodo, para evitar que en la ejecucion, la pagina web se actualice, envie la informacion del formulario y no permita visualizar el resultado de la operacion.
    //conventir input en Numeros:
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);

    let suma = a + b;
 //console.log(result);    
    resultado.innerHTML =  suma ;

}*/

//OTRA FORMA DE SOLUCIONAR EL PROBLEMA DE LA ACTUALIZACION INMEDIATA DE NUESTRO FORMULARIO:
//Al crear un formulario, el ultimo Boton del formulario es de tipo Submit, es decir que recarga y actualiza la pagina automaticamente,
//por lo tanto al codigo del boton, le decimos que type='button', y poner el evento Listener al boton.

btn.addEventListener('click', sumarInputValues);
function sumarInputValues() {

    //event.preventDefault(); //Se usa este metodo, para evitar que en la ejecucion, la pagina web se actualice, envie la informacion del formulario y no permita visualizar el resultado de la operacion.
    //conventir input en Numeros:
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);

    let suma = a + b;  
    resultado.innerHTML = suma;
    console.log(suma);

}




//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');
//const input = document.querySelector('input');

//console.log(input.value);

/*console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});*/

// cambiar el titulo de la pagina.
//h1.innerHTML = ('PATITO <br> FEO'); // Muestra el texto en la pagina web, pero toma en cuenta el codigo HTML dentro del parentesis
//h1.innerText = ('PATITO <br> FEO'); //  Muestra todo ek texto dentro del parentesis, en la pagina web, incluyendo el codigo HTML que hay dentro de ellos.

// La forma normal de modificar un atributo:
//h1.getAttribute('class'); //obtiene el valor del atributo.
//h1.setAttribute('class', 'rojo'); // en esta linea le estamos indicando al codigo que tome el atributo de class y lo cambie por rojo

//agregar clases a un elemento en JAVASCRIPT:
//h1.classList.add('rojo');

//eliminar clases a un elemento en JAVASCRIPT:
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

//MODIFICAR EL VALUE DE UN INPUT, de esta manera se puede modificar el placeHolder y cualquier atributo.
//input.value = '456';

//CREAR ELEMENTOS EN HTML QUE QUERAMOS
//const img = document.createElement('img');
//img.setAttribute('src','https://media.istockphoto.com/id/1354842602/es/foto/retrato-de-una-joven-empresaria-trabajando-en-una-computadora-port%C3%A1til-en-una-oficina.jpg?b=1&s=612x612&w=0&k=20&c=uwy5aD45buppH2e5Vd752Sb0JyIzniZDt7RDWwhelgw='); //le pusimos atributos a la imagen
//console.log(img);

//pid.append(img); // insertamos la imagen dentro un contenedor que ya existia, para mostrarla en la pagina web

//parrafito.innerHTML = 'Modifiquè este parrafo'; //Asi modificamos el contenido de un parrafo.