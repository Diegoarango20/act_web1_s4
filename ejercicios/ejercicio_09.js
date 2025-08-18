// Ejercicio: Crear un contador privado

const contador = (function() {
  let cuenta = 0;
  return function() {
    return cuenta++;
  };
})();

console.log(contador()); 
console.log(contador()); 
console.log(contador()); 
