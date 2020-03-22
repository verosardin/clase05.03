// Variables
// --------
// Una variable es un espacio de memoria para almacenar datos.
​
// Tipos de datos
// --------------
var edad = 35; // entero
var precio = 80.79; // decimal
var nombreCompleto = 'Fernando Marianetti' // cadena (puede ser con comillas dobles también)
var hayAsadoAlFinal = true; // booleano
var persona = { // objeto
   nombre: 'Javier',
   edad: 34,
   soltero: true
}
var comidasFavoritas = ['Milanesas', 'Pastel de papa', 'Ravioles']; // array
​
// Tipos de datos especiales
var esNaN = '35' / 2; // NaN significa "Not a Number" (no es un número)
var esNulo = null; // variable nula
var esIndefinido; // variable indefinida, todavía no tiene asignada un valor.
​
// console.log();
// -------------
// Ejecución con Node
if (1>0){
   // Cambiar var por let y ejecutar el programa. La diferencia entre var y let
   // se encuentra en el Scope o "alcance" de cada tipo de variable. LET respeta
   // siempre el Scope local mientras que VAR tiene un Scope más general.
   var holaMundo = "VAR Hola Mundo";
}
console.log(holaMundo);
​
// Esto es una constante
const PI = 3.14;
console.log('Constate Pi: '+ PI);
​
/* Para ejecutar este programa debemos seguir los siguientes pasos:
   1- Abrir la consola que más nos guste (cmd, git bash, powerShell, otra)
   2- Navegar con el comando "cd" hasta posicionarnos en el directorio donde se encuentra este archivo (101.js)
   3- Ejecutar el comando: node 101.js
*/
​
// Nota: es una buena práctica utilizar el formato "Camel Case" para declarar variables.
// Por ejemplo:  let estaEsUnaVariableCualquiera; (cada palabra con la 1ra letra en mayuscula)
​
​
// Operadores
// ----------
​
// De asignación
var miEdad = 34; // con el operador = puedo asignarle un valor a la variable
​
// Operadores Aritméticos
// ----------------------
let miVariable1 = 1 + 2; // suma
let miVariable2 = 1 - 2; // resta
let miVariable3 = 1 * 2; // multiplicación
let miVariable4 = 1 / 2; // división
miVariable1 ++; // incremento +1
miVariable1 --; // decremento -1
let resto = 15 %  2; // módulo: es el resto de la división
​
// Operadores de comparación
// Devuelven un booleano como resultado.
/* -------------------------
==    igualdad
!=    desigualdad
===   igualdad estricta (mismo valor y mismo tipo de dato)
!==   desigualdad estricta
>     mayor
<     menor
>=    mayor o igual
<=    menor o igual
*/
​
// Operadores lógicos
// Devuelven un booleano como resultado.
// ------------------
// && (AND). Ambas condiciones deben ser verdaderas para que devuelva true.
if ((10>15) && (10 != 20)) { // false
   // la primera condición es falsa y la segunda es verdadera
   // no ingresa al if porque el resultado del AND es false
}
​
// || (OR). Si alguna de las condiciones es verdadera devuelve true
if ((10>15) || (10 != 20)) { // true
   // la primera condición es falsa y la segunda es verdadera
   // ingresa al if porque el resultado del OR es true
}
​
// ! (NOT). Niega la condición, si era true devuelve false y viceversa.
if(!(10>15)){ // true
   // originalmente era false porque 10 es menor que 15, pero
   // con el NOT hacemos que devuelva true. Por lo tanto, ingresa
   // al if.
}
​
// Operadores especiales
// De concatenación
let nom = 'Teodoro';
let ape = 'Gonzalez';
let miNombreEs = nom + ' ' + ape; // "Teodoro Gonzalez"
​
// Condicionales
// ------------------
​
   if(true) { // condición
       // código a ejecutar si la condición es verdadera
   }
​
   if(false) { // condición
       // código a ejecutar si la condición es verdadera
   } else {
       // código a ejecutar si la condición es falsa
   }
​
   if(false) {
       // código a ejecutar si la condición es verdadera
   } else if (false) {
       // código a ejecutar si esta otra condicion es verdadera
   } else {
       // código a ejecutar si todas las condiciones anteriores fueron falsas
   }
​
   // if ternario
   //4>10 ? 'El 4 es más grande' : 'El 10 es más grande';
​
   // switch
   let dia = 'jueves'
   function finDeSemana (dia) {
   	switch (dia) {
   		case 'viernes':
   			console.log('buen finde');
   			break;
   		case 'lunes':
   			console.log('buena semana');
   			break;
   		default:
   			console.log('buen dia');
   	}
   }
​
// Bucles
// ------
​
// For
// El siguiente For lo podemos leer así: para la variable "vuelta", que
// inicia con el valor 1, mientras sea menor o igual a 5, incrementar en 1 su valor.
for (let vuelta = 1; vuelta <= 5; vuelta ++){
   console.log('Dando la vuelta número ' + vuelta);
}
​
// while
// el ejemplo anterior del For también lo podríamos hacer con un While
let vuelta = 1;
while (vuelta <= 5) {
   console.log('Dando la vuelta número ' + vuelta);
   vuelta++;
}
count(1,8);
​
// otro ejemplo
function count(desde, hasta) {
    while (desde <= hasta){
        console.log("El número actual es " + desde + " y es menor a "+ hasta);
        desde++;
    }
}
​
// do while
// el ejemplo anterior también lo podríamos hacer con un do-while
vuelta = 1;
do {
   console.log('Dando la vuelta número ' + vuelta);
   vuelta++;
} while (vuelta <= 5);
​
// Funciones
// ---------
function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for(let num = 0 ; num <= numero; num++){
        if(num%2 != 0){ // es impar?
            console.log(num + " -");
            contador++;
        }
    }
    return contador;
}
console.log("Se encontraron " + noParesDeContarImparesHasta(100) + " números impares.");
​
/*    Queremos construir una función que reciba un array de números como parámetro. La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".*/
function encontreUn5(numeros){
    let i = -1;
    do{
            i++;
            console.log(numeros[i]);
    }while(numeros[i] != 5);
    console.log("Se encontró un 5!");
}
let arrayNumeros = [1,8,3,4,9,5];
encontreUn5(arrayNumeros);