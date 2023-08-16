// Ejemplos de javascript

console.log("");

const edad = 55;
let nombre = "juan";
let apellido = "arbol";
const semestre= []; //List -> Array
const materiaPreferida = {nombre:"Cálculo", id:0}; //Diccionarios -> JSON (javascript object notation)
const universidad = null;
const carrera = undefined //variable que no está declarada o definida
// el const es una variable constante (No puedo actualizar su valor) en variables primitivas
//en variables como un array si se puede, el let es una variable y puedo actualizar su valor
console.log("tipo de dato de edad: "+ typeof edad)
console.log("convertir string a numero"); 
const preciomatr= "1500000.5";
console.log("entero:" +parseInt(preciomatr));
console.log("float:" +parseFloat(preciomatr));

console.log("Doble igual :" , "45"== 45); //compara valor
console.log("Triple igual igual :" , "45"=== 45); //compara valor y tipo

//concatenación
console.log(nombre +" "+apellido);
console.log(`${nombre} ${apellido}`);

//operador ternario
console.log( edad >= 18 ? "Es mayor de edad" : "Es menor de edad");

//condición
let= condition= edad>18
if(condition){} else{}

const dia= "LUNES"
switch (dia) {
    case "LUNES":
        console.log("lunes");
        break;
    case "LUNES":
        console.log("lunes");
        break;
    
    default:
        console.log("no es válido")
        break;
}

//ciclos
//forof
for (const item of [1,2,3]) {
    console.log(item);    
}

for (const key in materiaPreferida) {
console.log(key)
}

//funciones
//función clásica
function imprimirNombre(nombre){
    console.log(nombre)
}

imprimirNombre(nombre)
//arrow function
const imprimirNombreApellido = (nombre,apellido) => {`${nombre} ${apellido}`  }
imprimirNombreApellido(nombre)

//scope
const crearnombrecompleto = (nombre, apellido) => { 
    console.log("global scope fake");
    console.log(nombre, apellido);
    var name= nombre;
    if (nombre.length >3) {
        var name = "nombre corto"+ apellido;
        console.log("94 "+name);
    }
    console.log("92 "+ name)
 }

 const botonesHtml = document.getElementsByTagName('button');
 console.log(botonesHtml)
 crearnombrecompleto(nombre, apellido)

 // Array: puedo tener array de diferentes tipos de datos

let estudiantes = []

 // Agregar un elemento 
//  estudiantes.push(5)
//  estudiantes.push(null)
estudiantes.push({"nombre":"Juan", id:123})
estudiantes.push({"nombre":"Maria", id:1234})
estudiantes.push({"nombre":"Maria", id:12345})
//  estudiantes.push(()=>{console.log();})


estudiantes.forEach((estudiante) => console.log(estudiante.nombre))

for (let i = 0; i < estudiantes.length; i++) {
    if(estudiantes[i].nombre == "Maria"){
        console.log(estudiantes[i].id)
    }
    
}
const marias = estudiantes.filter(x=>x.nombre == "Maria")
console.log(marias)
const maria= estudiantes.find(x=>x.nombre == "Maria")
console.log(maria)

estudiantes = estudiantes.map(x=> {return {...x, edad:null }})
console.log(estudiantes)

console.log(typeof 5)