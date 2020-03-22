//Funcion expresada (la guardo dentro de una variable)
let sumar = function (numeroA,numeroB){
return numeroA + numeroB;
}

console.log (sumar(5,7))

//Funcion declarada

function restar (numeroA,numeroB){
return numeroA - numeroB
}

console.log (restar(10,3));

//Ejemplo de Scope.

let mensaje = 'Hola';

function saludar (){
let mensaje = 'chau'
return mensaje;
}
console.log (mensaje);
console.log (saludar());
//una variable de un scope local tiene predominancio sobre un scope global.
//definir valores de las variables por defecto para en los casos en que no haya.

function fecha (dia = 1, mes = 'enero'){
return 'Hoy es '+ dia+ ' de '+ mes
};
console.log(fecha(5,'Mayo'));