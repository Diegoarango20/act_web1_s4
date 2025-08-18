// Ejercicio: Ejecutar operación personalizada

function operacion(a, b, callback) {
  return callback(a, b);
}

console.log(operacion(5, 3, (x, y) => x * y)); 
console.log(operacion(5, 3, (x, y) => x + y)); 
