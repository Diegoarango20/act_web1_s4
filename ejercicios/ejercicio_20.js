// Ejercicio: Calcular promedio de un arreglo

const promedio = arr => arr.reduce((acum, num) => acum + num, 0) / arr.length;

console.log(promedio([10, 20, 30])); 
