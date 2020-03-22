    //ejemplo de un objeto literal
    let curso = {
cantidadDeAlumnos: 32,
docentes: 'Nacho, Javi',
horario: '8.30 a 12 hs',
notificaciones: function () {
return 'El horario de tu comision es: ' + this.horario

} 
    };
    //arriba en noteificaciones podemos reemplazar la palabra curso por THIS para hacer referencia al objeto en cuestion.
    //console.log(curso);

    //Usamos la dotnotation para saber una de las propiedades

    //console.log('La cantidad de alumnos de este curso es '+curso.cantidadDeAlumnos);

    //Metodos: son funciones que se asignan como valor a una clave y que buscan hacer algo mas alla de tener un simple dato.
//metodos dentro de un objeto literal.
//como es una funcion, tengo que ejecutarla.
    console.log(curso.notificaciones());

    //Constructor de objetos. armo el molde y dsp la variable particular.

    function Auto(laMarca, elModelo){
        this.marca = laMarca
        this.modelo = elModelo
    }
    let miAuto = new Auto('Peugeot', 2019);

    //console.log(miAuto);
    console.log(miAuto.marca);

    //otro ejemplo de molde de cursos. las funciones constructoras deben empezar con mayuscula para identificarlas.

    function Curso(cantidadDeAlumnos, docentes, horario){
        this.cantidadDeAlumnos = cantidadDeAlumnos,
        this.docentes = docentes,
        this.horario = horario
        }

    let curso1 = new Curso (40, 'Pedro y Jorge', '18.30 a 22.00 hs');
    let curso2 = new Curso (35, 'Juan y Ale', '14 a 17.30 hs');
    console.log(curso1);
    console.log(curso2);




