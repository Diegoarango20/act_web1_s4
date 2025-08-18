// Ejercicio: Multiplicar elementos de un arreglo

function multiplicarArreglo(arr) {
  return arr.reduce((acum, num) => acum * num, 1);
}

console.log(multiplicarArreglo([2, 3, 4])); 
