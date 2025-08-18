// Ejercicio: Contar vocales en una cadena

function contarVocales(cadena) {
  if (cadena.length === 0) return 0;

  const primeraLetra = cadena[0].toLowerCase();
  const esVocal = "aeiou".includes(primeraLetra) ? 1 : 0;

  return esVocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("hola")); 
