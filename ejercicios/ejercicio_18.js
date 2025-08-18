// Ejercicio: Validar correo electrónico

function esCorreo(cadena) {
  return cadena.includes('@') && cadena.endsWith('.com');
}

console.log(esCorreo("test@example.com")); 
console.log(esCorreo("test@example.org")); 
console.log(esCorreo("testexample.com"));  
