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
// const a_ = b;
// const b_ = a;
// a = a_;
// b = b_;

[a, b] = [b, a];

console.log('a = ' + a + ' y b = ' + b)

// -----Ejercicios spread/rest----- //

//Funcion que devuelva el sumatorio de los elementos
function sumEveryOther(...args){
  const sumEveryOther = args.reduce((a,b)=> a + b);
  console.log(sumEveryOther);
}
sumEveryOther(100, 50)

//Funcion que sume los numeros sin importar que tipo de datos reciba

let arr = [1, 'perro', 2, 'Alberto', true, 99, 4];
function onlyNum(e) {
  let arrayFiltrada = e.filter(datos => typeof datos === "number");
    const addOnlyNums = arrayFiltrada.reduce((a,b)=> a + b);
    console.log('Suma de solo los numeros: ' + addOnlyNums + '.')
}
onlyNum(arr);

//countTheArgs -- Cuantos argumentos se han recibido
function countTheArgs(...args){
  console.log(`Se han recibido ${args.length} elementos.`)
}
countTheArgs('hola', 'hello', 8, true, 44);

//Juntar dos arrays
let arr1 = [3, 5, 'Queen'];
let arr2 = [66, 'Gus', false];

function combineTwoArrays(a, b){
const concatenarArray = [...a, ...b]
console.log(concatenarArray)
}
combineTwoArrays(arr1, arr2);

// -----Extras----- //

//Modificar líneas desestructurando
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
const {yesterday:ayer, today:hoy, tomorrow:mañana} = HIGH_TEMPERATURES;
let maximaHoy = hoy;
let maximaMañana = mañana;
console.log(maximaHoy);
console.log(maximaMañana);

//Eliminar elementos repetidos
let arrayRepes = [3, 3, 5, 'Hola', 'Saludos', 'Hola', false, 11];
let onlyUniques = arrayRepes.filter((item,index)=>{
    return arrayRepes.indexOf(item) === index;
  })
console.log(onlyUniques);

//Combinar cualquier cantidad de Arrays
let arrr1 = [1, 2];
let arrr2 = [3, 4];
let arrr3 = [5, 6];
let arrr4 = [7, 8];

function combineAllArrays(...argumentos){
const conc = argumentos.reduce((a,b)=> a.concat(b))
console.log(conc)
}

combineAllArrays (arrr1, arrr2, arrr3);

//Cuadrado de cada elemento y sumarlos todos

function sumAndSquare(...args){
  let potencia = args.map((a) => {
    return a * a;
})
  let suma = potencia.reduce((a, b) => {
    return a + b;
  })
console.log(potencia);
console.log(suma);
}
sumAndSquare(2, 3);