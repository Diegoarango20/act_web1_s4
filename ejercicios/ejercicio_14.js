// Ejercicio: Generar un ID único

const generarId = (function() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
})();

console.log(generarId()); 
console.log(generarId()); 
console.log(generarId()); 
