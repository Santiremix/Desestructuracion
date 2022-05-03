// -----Destructing----- //

//Extraer Ana con todos sus datos personales
//Extraer el email del empleado Luis
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
const [e1, e2, e3] = empleados;
// console.log(empleados);
console.log(e2);
console.log(e1.email)

//Intercambiar los valores de a y b
let a = 5;
let b = 3;
const a_ = b;
const b_ = a;
a = a_;
b = b_;
console.log('a = ' + a + ' y b = ' + b)

// -----Ejercicios spread/rest----- //

//Funcion que devuelva el sumatorio de los elementos
let numbers = [6, 8, 2, 3, 1];
const sumEveryOther = numbers.reduce((a,b)=> a + b);
console.log(sumEveryOther);

let numbers2 = [11, 3, 12];
const sumEveryOther2 = numbers2.reduce((a,b)=> a + b);
console.log(sumEveryOther2); //Hacer una sola función

//Funcion que sume los numeros sin importar que tipo de datos reciba

let arr = [1, 'perro', 2, 'Alberto', true, 99, 4];
function onlyNum(e) {
        return e.filter(datos => typeof datos === "number");
      }
console.log(onlyNum(arr))
let arrayFiltrada = onlyNum(arr);
const addOnlyNums = arrayFiltrada.reduce((a,b)=> a + b);
console.log(addOnlyNums)

//countTheArgs => Cuantos argumentos se han recibido
let data = ['hola', 'hello', true, 44]
function countTheArgs(e){
    console.log(`Se han recibido ${e.length} elementos.`)
}
countTheArgs(data);

//Juntar dos arrays
let arr1 = [3, 5, 'Hola'];
let arr2 = [66, 'Gus', false];

function combineTwoArrays(a, b){
const concatenarArray = [...a, ...b]
console.log(concatenarArray)
}
combineTwoArrays(arr1, arr2);






