//If ternario :  una linea de codigo resumida para hacer evaluaciones
let elMayor = 4 > 10? 'El 4 es mayor': 'El 10 es Mayor';
console.log(elMayor);

let fruta = 'Manzana';

let resultado = fruta == 'Banana'? 'Buenisimo, me gustan las bananas': 'Ufa, queria banana';

//conviene tener el resultado de este if dentro de una varialbe para que dsp aparezca por consola.

console.log(resultado)

//Ejemplo de Switch: siempre y cuando quieras evaluar si una expresion es exactamente igual a un valor esperado.

let semaforo = ''

switch (semaforo){
case 'Verde': console.log('Puedo cruzar');
break;
case 'Amarillo': console.log('Tener precaucion');
break;
case 'Rojo': console.log ('No cruces, hay que esperar');
break;
default: 
console.log('No funciona el semaforo');
break;
}